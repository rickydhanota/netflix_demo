import React, {useState, useEffect} from 'react';
import styles from "./Banner.module.css";
import axios from "../axios";
import requests from '../Request';

const Banner = (props) => {

    const [movie, setMovie] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);

    console.log(movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    
    return (
        <div className= {styles.banner} style = {{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
            }}>
            
            <div className={styles.banner_contents}>
                <h1 className={styles.banner_title}>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className={styles.banner_buttons}>
                    <button className={styles.banner_button}>Play</button>
                    <button className={styles.banner_button}>My List</button>
                </div>
                <h1 className={styles.banner_description}>{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className={styles.banner_fadeBottom}>
                {/* Empty div */}
            </div>
        </div>
    );
};

export default Banner;