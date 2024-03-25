import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {




  console.log(movies)
  if (!movies) {
    // Handle the case where movies is null or undefined
    return <div>Loading...</div>; // Or any other loading indicator
  }
  return (
    <div className=" text-white">
      <div>
        <h1 className=" text-3xl font-bold p-3 ml-12 mb-5">{title}</h1>
        <div>

          <div className='flex flex-wrap gap-4 justify-center'>
            {
              movies.map((movies) => (<MovieCard key={movies.id} posterPath={movies.poster_path} />))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default MovieList;
