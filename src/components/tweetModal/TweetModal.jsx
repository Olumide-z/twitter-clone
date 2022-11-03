import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TweetInput } from '../'
import './tweetModal.css';

import { db } from '../../firebase';

import {collection, orderBy, query, onSnapshot, serverTimestamp } from 'firebase/firestore';


const TweetModal = () => {
  const [file, setFile] = useState("");
  const [tweets, setTweets] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    const q = query(collection(db, 'tweets'), orderBy('timestamp', 'desc'));

    const getTweet = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
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
      photoUrl: file.name || "",
      timestamp: serverTimestamp(),
  });

  setInput('');
  }

  console.log(user)

  return (
    <div className="tweetModal">
        <TweetInput modal input={input} sendTweet={sendTweet} setInput={setInput} file={file} setFile={setFile}/>
    </div>
  )
}

export default TweetModal