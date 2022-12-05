import React from 'react';
import styles from "./HomeScreen.module.css";
import Navbar from './Navbar';
import Banner from './Banner';

const HomeScreen = (props) => {
    return (
        <div className={styles.homeScreen}>
            <Navbar />

            <Banner />
        </div>
    );
};

export default HomeScreen;