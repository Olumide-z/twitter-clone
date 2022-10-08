import './userLogout.css';
import { useSelector } from 'react-redux';

import { Avatar } from "@mui/material";

const UserLogout = ({ Icon, margin, long, display }) => {
    const { user } = useSelector(store => store.user);
    console.log(user)

  return (
    <div className={margin ? 'user__logout user_margin' : 'user__logout'}>
    <Avatar className="icon1"/>

    <div className={display ? 'user__logout-details' : 'user__logout-details none'}>
    <div>
      <h4>{(long ? (user?.email) : ((user?.email).length <= 12 ? (user?.email) : `${(user?.email).slice(0, 12)}...`) )}</h4>
      <p>@{(long ? (user?.displayName) : ((user?.displayName).length <= 12 ? (user?.displayName) : `${(user?.displayName).slice(0, 12)}...`) )}</p>
    </div>
    { Icon && <Icon className="icon2"/> }
    </div>

    </div>
  )
}

export default UserLogout