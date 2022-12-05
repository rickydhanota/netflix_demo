import React, {useState, useEffect} from 'react';
import styles from "./Navbar.module.css";

const Navbar = (props) => {

    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`${styles.nav} ${show && styles.nav_black}`} >
            <div className={styles.nav_contents}>
                <img className= {styles.nav_logo} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='' />
                <img className={styles.nav_avatar} src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='' />
            </div>
        </div>
    );
};

export default Navbar;