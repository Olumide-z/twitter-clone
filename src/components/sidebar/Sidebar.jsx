import "./sidebar.css";
import { sidebarData } from "./sidebarData";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import TwitterIcon from "@mui/icons-material/Twitter";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useDispatch, useSelector } from "react-redux";
import { closeTweet, openTweet } from '../../features/modalSlice';
import { ImLeaf } from 'react-icons/im'
import { AiOutlineCheck } from 'react-icons/ai';

import { UserLogout } from '../';
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import { dark, light } from "../../features/themeSlice";



const Sidebar = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector(store => store.user);

  const signOut = () =>{
    dispatch(logout());
    auth.signOut();

    navigate('/')
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setIsLogoutOpen(false)
      }
    };
    document.addEventListener('mousedown', handler);

    return() => {
      document.removeEventListener('mousedown', handler);
    }
  }, []);
 

  return (
    <div className="sidebar">
      <div className="sidebar__contents">
        <TwitterIcon className="icon" />

        {sidebarData.map((item) => (
          <NavLink
            to={`/${item.links}`}
            className="links"
            style={({ isActive }) => ({
              fontWeight: isActive ? "800" : undefined,
            })}
          >
            <div className="sidebar__content" key={item.id}>
              <p>{item.icon}</p>
              <p className='sidebar-name'>{item.name}</p>
            </div>
          </NavLink>
        ))}

        <button className="tweet-btn" onClick={() => dispatch(openTweet())}>Tweet</button>
        <button className="leaf" onClick={() => dispatch(openTweet())}><ImLeaf /></button>

        <div className="logout">
         {isLogoutOpen && (
         <div className="logoutBtn" ref={menuRef}>
            <div>
              <div className="big"><UserLogout Icon={AiOutlineCheck} long display/></div>
              <div className="small"><UserLogout Icon={AiOutlineCheck} display /></div>
            </div>
            <p className="logoutUser" onClick={signOut}>Logout @{user?.displayName}</p>
          </div> 
        )}
        <div onClick={() =>setIsLogoutOpen(true)}>
        <UserLogout Icon={MoreHorizIcon} margin />
        </div>

        </div>

        <div className="switchMode">
          <div className="whiteMode" onClick={() => dispatch(light())}></div>
          <div className="darkMode" onClick={() => dispatch(dark())}></div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
