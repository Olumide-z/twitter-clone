import './explore.css';
import SettingsIcon from '@mui/icons-material/Settings';

import { Sidebar, Search, Trends } from '../../components/index';
import { Avatar } from '@mui/material';

const Explore = () => {
  return (
    <div className="explore">
      <Sidebar />

      <div className="explore__trends">

        <div className="explore__nav">
          <div className="explore__search">
            <Search big= 'true'/>
          </div> 
          <SettingsIcon className="explore__icon"/>
        </div>

        <div className="explore__event">
          <img src="https://pbs.twimg.com/media/Fc9sRGlXoAYexnQ?format=jpg&name=small" alt="explore pic" />
        </div>

        <div className="explore__trends">
          <Trends big='true'/>
        </div>
      </div>

      <div className="explore__who-to-follow">
        <div className="explore__follow">
          <h3>Who to follow</h3>
          <div className="explore__follow-div1">
            <div className="explore__follow-div2">
              <Avatar className='avatar'/>
              <div>
                <p>Emrys</p>
                <p>@Who_is_Emrys</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Explore