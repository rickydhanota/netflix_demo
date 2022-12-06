import React from 'react';
import styles from "./HomeScreen.module.css";
import Navbar from './Navbar';
import Banner from './Banner';
import requests from '../Request';
import Row from './Row';

const HomeScreen = (props) => {
    return (
        <div className={styles.homeScreen}>
            <Navbar />

            <Banner />

            <Row title = {'NETFLIX ORIGINALS'} isLargeRow fetchUrl = {requests.fetchNetflixOriginals}/>
            <Row title = {"Trending Now"} fetchUrl = {requests.fetchTrending}/>
            <Row title = {"Top Rated"} fetchUrl = {requests.fetchTopRated}/>
            <Row title = {"Action Movies"} fetchUrl = {requests.fetchActionMovies}/>
            <Row title = {"Comedy Movies"} fetchUrl = {requests.fetchComedyMovies}/>
            <Row title = {"Horror Movies"} fetchUrl = {requests.fetchHorrorMovies}/>
            <Row title = {"Romance Movies"} fetchUrl = {requests.fetchRomanceMovies}/>
            <Row title = {"Documentaries"} fetchUrl = {requests.fetchDocumentaries}/>

        </div>
    );
};

export default HomeScreen;