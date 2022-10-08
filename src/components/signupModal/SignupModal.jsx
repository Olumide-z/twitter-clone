import { useState } from 'react';
import './signupModal.css';

import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { closeSignup } from '../../features/modalSlice';

import { auth } from '../../firebase';
import { login } from '../../features/userSlice';

const SignupModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    // SIGN UP
    const signup = (e) => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                }))
            })
        }).catch(err => alert(err))
    };


  return (
    <div className="signupModal">
        <div className="signupModal__content">
            <CloseIcon className='icon' onClick={() => dispatch(closeSignup())}/>
            <div>
            <h1>Create your account</h1>

            <form>
                <div className="signupModal__form">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                    <label className={name.length > 0 && 'form_label'}>Name</label>
                </div>
                <div className="signupModal__form">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    <label className={email.length > 0 && 'form_label'}>Email</label>
                </div>
                <div className="signupModal__form">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
                    <label className={password.length > 0 && 'form_label'}>password</label>
                </div>

                <button className='formModal__btn' onClick={signup}>Sign Up</button>
            </form>
            </div>
        </div>

    </div>
  )
}

export default SignupModal