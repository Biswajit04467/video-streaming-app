import React from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    const getNowPlaying = useNowPlayingMovies();

    // Call the getNowPlaying function to fetch the data
    getNowPlaying();

    return (
        <div className=''>
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
