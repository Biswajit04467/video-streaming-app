import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movie);


  console.log(movies.popularMovies);

  return (
    <div className='bg-black'>

      <div className=' relative -mt-4'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      </div>
      {
        // movieList - Popular
        //  moviecards * n
        // movielist -nowPlaying 
        // movielist- Trending 
        // movielist - horror
      }
    </div>
  )
}

export default SecondaryContainer
