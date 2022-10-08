import './homeFeeds.css'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import { Navbar, Tweet, TweetInput } from '../';


const HomeFeeds = () => {
  return (
    <div className="homeFeeds">
      <Navbar title='Home' Icon={AutoAwesomeIcon}/>
      <TweetInput />      
      <Tweet />
    </div>
  )
}

export default HomeFeeds