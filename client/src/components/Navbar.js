import React, {useState, useEffect} from 'react';
import styles from "./Navbar.module.css";
import {useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Navbar = (props) => {

    const user = useSelector(selectUser);
    const [show, handleShow] = useState(false);

    const navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    const goHome = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const goToProfile = (e) => {
        e.preventDefault();
        if(user){
            navigate("/profile");
        }
        else{
            navigate("/login");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar)
    }, []);

    return (
        <div className={`${styles.nav} ${show && styles.nav_black}`} >
            <div className={styles.nav_contents}>
                <img className= {styles.nav_logo} onClick = {goHome} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />
                <img className={styles.nav_avatar} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='' onClick={goToProfile} />
            </div>
        </div>
    );
};

export default Navbar;