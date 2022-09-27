import './navbar.css';

import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ Icon, title, subTitle, button, icon1 }) => {
  return (
    <div className="navbar">
          <div className='navbar__div'>
            {icon1 && <CloseIcon className='icon'/>}
            <div className="navbar__left">
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </div>
          </div>
        <div className="navbar__right">
            {Icon && <Icon />}
            { button && <button>Save</button> }
        </div>
    </div>
  )
}

export default Navbar