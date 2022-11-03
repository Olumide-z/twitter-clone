import './homeFeeds.css'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { Navbar, Tweet, TweetInput, Loader } from '../';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { db, storage } from '../../firebase';

import {collection, orderBy, query, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';


const HomeFeeds = () => {
  const [tweets, setTweets] = useState([])
  const [input, setInput] = useState('');
  const [file, setFile] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false)
  

  const { user } = useSelector((store) => store.user);

  // Image upload
  // const imageListRef = ref(storage, 'images/');

  // const uploadImage = () => {
  //   if(file == null) return;
  //   const imageRef = ref(storage, `images/${file.name + v4()}`);
  //   uploadBytes(imageRef, file).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageList((prev) => [...prev, url])
  //     })
  //     console.log('image uploaded')
  //   })
  // }

  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url])
  //       })
  //     })
  //     console.log(response)
  //   })
  // }, [])

  useEffect(() => {
    setLoading(true)
    const q = query(collection(db, 'tweets'), orderBy('timestamp', 'desc'));

    const getTweet = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
      setLoading(false)
    });
    return () => {
      getTweet();
    }
    
  }, []);


  const sendTweet = e => {
    e.preventDefault();

    db.collection('tweets').add({
      name: user.displayName,
      username: user.email,
      message: input,
      photoUrl:  file?.name || "",
      timestamp: serverTimestamp(),
  });

  // uploadImage();
  setInput('');
  }

  // if (tweets) {
  //  setLoading(false)
  // }

  return (
    <div className="homeFeeds">
      <Navbar title='Home' Icon={AutoAwesomeIcon}/>
      <TweetInput input={input} sendTweet={sendTweet} setInput={setInput} file={file} setFile={setFile}/>
      {loading && <Loader />}   
      {tweets?.map(({ id, data: {name, username, message, photoUrl, timestamp }}) => {
        const singleTweet = tweets.find((tweet) => tweet.id === id);
        return(
        <Tweet 
        key={id}
        name={name}
        username={username}
        message={message}
        photoUrl={photoUrl}
        timestamp={timestamp}
        file={file}
        imageList={imageList}
        singleTweet={singleTweet}
        />
      )}) }
    </div>
  )
}

export default HomeFeeds