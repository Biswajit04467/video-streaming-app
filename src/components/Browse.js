import React from 'react'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

    useNowPlayingMovies();  // custom hook for fetching data
    usePopularMovies(); // calling the custom hook for fetch data

    return (
        <div className=''>
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default Browse
