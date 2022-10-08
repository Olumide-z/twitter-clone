import './explore.css';
import SettingsIcon from '@mui/icons-material/Settings';

import { Sidebar, Search, Trends, WhoToFollow } from '../../components';

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

      <WhoToFollow />
    </div>
  )
}

export default Explore