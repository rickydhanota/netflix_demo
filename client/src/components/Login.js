import React, {useState} from 'react';
import styles from "./Login.module.css";
import SignUpScreen from './SignUpScreen';
import {useNavigate} from "react-router-dom";

const Login = (props) => {

    const [signIn, setSignIn] = useState(false);
    const navigate = useNavigate();

    const goHome = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <div className={styles.loginScreen}>
            

                <div className={styles.loginScreen_background}>
                    <img className= {styles.loginScreen_logo} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' onClick = {goHome} />

                    <button onClick={() => setSignIn(true)} className= {styles.loginScreen_button}>Sign In</button>

                    <div className={styles.loginScreen_gradient} />

                    <div className={styles.loginScreen_body}>
                        {signIn ? (<SignUpScreen />) : (
                            <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2> Watch anywhere. Cancel at any time</h2>
                            <h3>Ready to watch? Enter your email to create or restart your subscription</h3>

                            <div className= {styles.loginScreen_input}>
                                <form>
                                    <input type={"email"} placeholder = "Email Address" />
                                    <button onClick={() => setSignIn(true)} className={styles.loginScreen_getStarted}>GET STARTED</button>
                                </form>
                            </div>
                            </>
                        )}
                    </div>
                </div>

        </div>
    );
};

export default Login;