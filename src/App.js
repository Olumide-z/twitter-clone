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
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";

import './dark.css';

function App() {
  const { isOpen, isTweetOpen, isSignupOpen, isSigninOpen } = useSelector(
    (store) => store.modal
  );
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" />;
    } else {
      <Navigate to="/home" />;
    }

    return children;
  };

  const { darkMode } = useSelector(store => store.theme);

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
