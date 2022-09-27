import './homeFeeds.css'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PlaceIcon from '@mui/icons-material/Place';

import { Navbar, Tweet } from '../index';
import { Avatar } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';

const HomeFeeds = ({ Icon, title}) => {
  return (
    <div className="homeFeeds">
      <Navbar title='Home' Icon={AutoAwesomeIcon}/>

      <div className="homeFeeds__inputField">
        <div className="homeFeeds__inputField-content">
          <Avatar className='icon'/>

          <form className='homeFeeds__inputField-form'>
            <input type="text" placeholder="What's happening?"/>
            <div>
              <div>
                <PhotoIcon className='homeFeeds__inputField-icon'/>
                <GifBoxIcon className='homeFeeds__inputField-icon' />
                <SentimentSatisfiedAltIcon className='homeFeeds__inputField-icon'/>
                <PlaceIcon className='homeFeeds__inputField-icon'/>
              </div>
            <button>Tweet</button>
            </div>
          </form>
        </div>
        
      </div>
      <Tweet />
    </div>
  )
}

export default HomeFeeds