import './whoToFollow.css';
import { Avatar } from '@mui/material';

const WhoToFollow = () => {
  return (
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

  )
}

export default WhoToFollow