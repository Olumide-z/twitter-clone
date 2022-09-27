import HouseIcon from '@mui/icons-material/House';
import TagIcon from '@mui/icons-material/Tag';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const sidebarData = [
    {id: 1, name: 'Home', links:'home',  icon: <HouseIcon style={{fontSize: '2rem'}}/>},
    {id: 2, name: 'Explore',  links:'explore', icon: <TagIcon style={{fontSize: '2rem'}}/>},
    {id: 3, name: 'Notifications',  links:'notifications', icon: <NotificationsNoneIcon style={{fontSize: '2rem'}} /> },
    {id: 4, name: 'Bookmarks',  links:'bookmarks', icon: <BookmarkBorderIcon style={{fontSize: '2rem'}} />},
    {id: 5, name: 'Profile',  links:'profile', icon: <PersonOutlineIcon style={{fontSize: '2rem'}} />},
]