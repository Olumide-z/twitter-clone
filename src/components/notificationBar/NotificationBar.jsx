import './notificationBar.css';
import { Link, NavLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const NotificationBar = () => {
  return (
    <div className="notification-nav">
      <div className="top-nav">
        <h3>Notifications</h3>
        <p>
          <SettingsIcon />
        </p>
      </div>
      <div className="bottom-nav">
        <Link to="/notifications" className='bottom-nav-link'>
          <NavLink
            to="/notifications"
            className="nav-links"
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid #1d9bf0" : "none",
            })}
          >
            All
          </NavLink>
        </Link>
        <Link to="/notification/mentions" className='bottom-nav-link'>
          <NavLink
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid #1d9bf0" : "none",
            })}
            to="/notification/mentions"
            className="nav-links"
          >
            Mentions
          </NavLink>
        </Link>
      </div>
    </div>
  );
};

export default NotificationBar;
