import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className='bg-black'>

      <div className=' relative -mt-56'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
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
