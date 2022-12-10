import React, { useRef } from 'react';
import { auth } from '../firebase';
import styles from "./SignUpScreen.module.css";
import {useNavigate} from "react-router-dom";

const SignUpScreen = (props) => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
        .then((authUser) => {
            console.log("This is auth User in SignUpScreen", authUser)
        })
        .catch( err => {
            console.log(err)
        });
        navigate("/");
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
        .then(authUser => {
            console.log("This is auth user in SignIn", authUser)
            navigate("/");
        })
        .catch(err => {
            console.log(err)
        });
    }

    return (
        <div className={styles.signupScreen}>
            <form>
                <h1>Sign In</h1>
                <input placeholder='Email' ref={emailRef} type={"email"} />
                <input placeholder='Password' ref={passwordRef} type={"password"} />
                <button type='submit' onSubmit={signIn}>Sign In</button>

                <h4>
                    <span className={styles.signupScreen_gray}>New to Netflix?</span>
                    <span className={styles.signupScreen_link} on onClick={register}> Sign Up Now.</span> 
                </h4>
            </form>
        </div>
    );
};

export default SignUpScreen;