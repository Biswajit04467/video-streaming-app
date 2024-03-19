import { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../Redux/movieSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTION);
        const json = await data.json();
        const filterVideo = json.results.filter((movie) => (movie.type === "Trailer"));
        const Trailer = filterVideo.length ? filterVideo[0] : json.results[0]; //if there are no videos of type trailer
        dispatch(addTrailerVideo(Trailer));

    }

    useEffect(() => {
        getMovieVideos();
    }, []);
}

export default useMovieTrailer;