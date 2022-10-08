import './signinModal.css'
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSignin } from '../../features/modalSlice';

import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { login } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

const SigninModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // SIGN IN
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
        }).catch(error => alert(error))

        navigate('/home')
        dispatch(closeSignin())
    };

        // GOOGLE
    
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
    <div className="signinModal">
        <div className="signinModal__content">
            <CloseIcon className='close_icon' onClick={() => dispatch(closeSignin())}/>

            <div className='content'>
            <div className='content__section'>
                <div className='content__icons'>
                <TwitterIcon className='icon'/>
                </div>

                <h1>Sign in to Twitter</h1>
                <button className='google-btn' onClick={handleGoogleSignin}>
                    <img src="/images/google.png" alt="google" className='google-img'/> Sign up with Google
                </button>
                <p>or</p>
                <div className="email__input">
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label className={email.length > 0 && 'form_label'}>email</label>
                </div>
                <div className="email__input">
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label className={password.length > 0 && 'form_label'}>password</label>
                </div>
                <button className='next-btn' onClick={signIn}>Sign in</button>
                <button className='password-btn'>Forgot Password</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default SigninModal