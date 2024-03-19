import { useEffect } from 'react'
import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Redux/movieSlice'

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.log("error while fetching the data-->" + error);
        }
    }

    useEffect(() => {
        getNowPlaying();
    }, []);

    // Return the getNowPlaying function
    return getNowPlaying;
}

export default useNowPlayingMovies;
