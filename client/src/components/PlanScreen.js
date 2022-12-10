import React from 'react';
import styles from "./PlanScreen.module.css";

const PlanScreen = (props) => {
    return (
        <div className={styles.planScreen}>
            <div className={styles.planScreen_plan}>
                <div className={styles.planScreen_info}>
                    <h5>Netflix Standard Plan</h5>
                    <h6>1080p</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className={styles.planScreen_plan}>
                <div className={styles.planScreen_info}>
                    <h5>Netflix Basic Plan</h5>
                    <h6>480p</h6>
                </div>
                <button>Subscribe</button>
            </div>
            <div className={styles.planScreen_plan}>    
                <div className={styles.planScreen_info}>
                    <h5>Netflix Premium Plan</h5>
                    <h6>4k + HDR</h6>
                </div>
                <button>Subscribe</button>
            </div>

        </div>
    );
};

export default PlanScreen;