import React, {useState, useEffect} from 'react';
import styles from "./Banner.module.css";

const Banner = (props) => {

    const [movie, setMovie] = useState([]);

    useEffect(()=> {

    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    
    return (
        <div className= {styles.banner} style = {{
            backgroundImage: `url("https://m.media-amazon.com/images/I/11ASBRs3-QL._AC_SY580_.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
            
            <div className={styles.banner_contents}>
                <h1 className={styles.banner_title}>Movie Name</h1>
                <div className={styles.banner_buttons}>
                    <button className={styles.banner_button}>Play</button>
                    <button className={styles.banner_button}>My List</button>
                </div>
                <h1 className={styles.banner_description}>{truncate("Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test", 150)}</h1>
            </div>

            <div className={styles.banner_fadeBottom}>
                {/* Empty div */}
            </div>
        </div>
    );
};

export default Banner;