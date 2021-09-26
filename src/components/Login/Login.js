import React from 'react'
import './Login.css'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button } from '@material-ui/core'
import { auth, provider } from './../../firebase'
import { login } from './../../features/userSlice'
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
            }))
        })
        .catch(error => alert(error.message));
    };


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.imgur.com/hNZvInF.jpeg" alt="loader" />
                <Button onClick={signIn} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login
