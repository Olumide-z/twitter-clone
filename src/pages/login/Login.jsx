import "./login.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import { useDispatch } from "react-redux";
import { openSignin, openSignup } from "../../features/modalSlice";

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function googleSignin() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  const handleGoogleSignin = async () => {

    try {
      await googleSignin();
      navigate("/home");
    } catch (err) {
      // setError(err.message);
      console.log(err)
    }
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src="/images/login.png" alt="logo" />
      </div>

      <div className="login__right">
        <TwitterIcon className="icon" />
        <h1>Happening now</h1>
        <h3>Join Twitter today.</h3>

        <div className="login__btns">
          <div>
            <button onClick={handleGoogleSignin}>
              <img src="/images/google.png" alt="google" /> Sign up with Google
            </button>
            <p className="or">or</p>
            <button className="btn" onClick={() => dispatch(openSignup())}>
              Sign up with email
            </button>
          </div>
          <p className="text">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </div>

        <div className="login__signin">
          <p>Already have an account?</p>
          <button onClick={() => dispatch(openSignin())}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
