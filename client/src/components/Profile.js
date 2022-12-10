import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Navbar from './Navbar';
import styles from "./Profile.module.css";
import {useNavigate} from "react-router-dom";
import PlanScreen from './PlanScreen';

const Profile = (props) => {

    const user = useSelector(selectUser);
    console.log(user)

    const navigate = useNavigate();

    const signOut = () => {
        auth.signOut();
        navigate("/");
    }

    return (
        <div className={styles.profileScreen}>
            <Navbar />
            <div className={styles.profileScreen_body}>
                <h1>Edit Profile</h1>
                <div className={styles.profileScreen_info}>
                    <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='' />
                    <div className={styles.profileScreen_details}>
                        <h2>{user.email}</h2>
                        <div className={styles.profileScreen_plans}>
                            <h3>Plans</h3>
                            <PlanScreen />
                            <button onClick={signOut} className={styles.profileScreen_signOut}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;