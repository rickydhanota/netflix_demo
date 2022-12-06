import React, {useState, useEffect} from 'react';
import styles from "./Row.module.css";
import axios from "../axios";

const Row = (props) => {

    const {title, fetchUrl, isLargeRow = null} = props;
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(()=> {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className={styles.row}>
            <h2>{title}</h2>
            <div className={styles.row_posters}>
                {movies.map((movie, index) => 
                    (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img 
                            className= {`${styles.row_poster} ${ isLargeRow && styles.row_posterLarge}`} 
                            key={index} 
                            id = {movie.id} 
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt = {movie.name}/>
                        )
                    )
                )}
            </div>
        </div>
    );
};

export default Row;