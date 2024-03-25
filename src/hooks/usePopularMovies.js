import { useEffect } from 'react'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../Redux/movieSlice'

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular', API_OPTION);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.log("error while fetching the data-->" + error);
        }
    }

    useEffect(() => {
        getPopularMovies();
    }, []);

    // Return the getNowPlaying function
    return getPopularMovies;
}

export default usePopularMovies;
