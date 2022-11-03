import {
  Home,
  Explore,
  Notifications,
  Bookmarks,
  Profile,
  Mention,
  TrendsPage,
  Login,
} from "./pages";
import {
  ProfileModal,
  TweetModal,
  SignupModal,
  SigninModal,
} from "./components";

import { login, logout } from "./features/userSlice";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import './dark.css';

function App() {
  const { isOpen, isTweetOpen, isSignupOpen, isSigninOpen } = useSelector(
    (store) => store.modal
  );
  const { user } = useSelector((store) => store.user);
  const { darkMode } = useSelector(store => store.theme);

  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
        }))
      }else{
        dispatch(logout());
      }
    })
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" />;
    } else {
      <Navigate to="/home" />;
    }

    return children;
  };


  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        {isOpen && <ProfileModal />}
        {isTweetOpen && <TweetModal />}
        {isSignupOpen && <SignupModal />}
        {isSigninOpen && <SigninModal />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notification/mentions"
            element={
              <ProtectedRoute>
                <Mention />
              </ProtectedRoute>
            }
          />
          <Route
            path="/i/trends"
            element={
              <ProtectedRoute>
                <TrendsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
