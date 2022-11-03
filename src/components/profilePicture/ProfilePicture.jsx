import './profilePicture.css';
import { Avatar } from '@mui/material';
import { openModal } from '../../features/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProfilePicture = ({ button, small }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);
  console.log(user)

  return (
    <div className="profilePicture">
        <div className="profile__background">
          <div></div>
        </div>
        
        <div className='profile__div1'>
          <div className="profile__image" style={{ height: small ? '130px' : '150px', width: small ? '130px' : '150px' }}>
           {/* <img src="https://pbs.twimg.com/profile_images/1493303557797330945/CxzWmYod_400x400.jpg" alt="profile-pic" />
            */}
            <Avatar className='avatar'>{user.displayName[0]}</Avatar>
          </div>
          { button && <button onClick={() => dispatch(openModal())}>Edit profile</button> }
        </div>
    </div>
  )
}

export default ProfilePicture