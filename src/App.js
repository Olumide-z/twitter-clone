import { Home, Explore, Notifications, Bookmarks, Profile, Mention } from './pages/index';
import { ProfileModal } from './components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const { isOpen } = useSelector(store => store.modal)
  return (
    <div className="App">
      <BrowserRouter>
      {isOpen && <ProfileModal /> }
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/bookmarks' element={<Bookmarks/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/notification/mentions' element={<Mention />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
