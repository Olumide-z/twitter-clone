import './tweetInput.css';

import { Avatar } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PlaceIcon from '@mui/icons-material/Place';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { closeTweet } from '../../features/modalSlice';

const TweetInput = ({ modal }) => {
  const dispatch = useDispatch();

  return (
    <div className={modal ? "tweetInput tModal" : 'tweetInput'}>
        {modal && <CloseIcon className='icon' onClick={() => dispatch(closeTweet())}/>}
        <div className="tweetInput-content">
          <Avatar className='icon'/>

          <form className='tweetInput-form'>
            <input type="text" placeholder="What's happening?"/>
            <div>
              <div>
                <PhotoIcon className='tweetInput-icon'/>
                <GifBoxIcon className='tweetInput-icon' />
                <SentimentSatisfiedAltIcon className='tweetInput-icon'/>
                <PlaceIcon className='tweetInput-icon'/>
              </div>
            <button>Tweet</button>
            </div>
          </form>
        </div>
        
      </div>
  )
}

export default TweetInput