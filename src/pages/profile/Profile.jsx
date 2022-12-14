import './profile.css';
import { Sidebar, TrendsBar, Navbar, ProfilePicture } from '../../components'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCalendar3 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector(store => store.user);

  return (
    <div className="profile">
      <Sidebar />

      <div className="profile__feeds">
        <Navbar title={user?.displayName} subTitle='454 Tweets'/> 
        
        <ProfilePicture button/>
        <div className="profile__details">
          <h3>{user?.email}</h3>
          <p>@{user?.displayName}</p>
          <p>Frontend Developer</p>
          <div>
            <p><HiOutlineLocationMarker /> Lagos state, Nigeria</p>
            <p><BsCalendar3/> Joined April 2019</p>
          </div>
          <div>
            <p><span>187 </span>Following</p>
            <p><span>54 </span>Followers</p>
          </div>
        </div>

      </div>

      <TrendsBar />
    </div>
  )
}

export default Profile