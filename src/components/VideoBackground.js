import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"


const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movie?.trailerVideo);

    useMovieTrailer(movieId);  // custom hook


    return (
        <div className=" ">
            <iframe className=" w-screen aspect-video overflow-hidden"
                src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">

            </iframe>
        </div >
    )
}

export default VideoBackground

// {
//     "id": 763215,
//         "results": [
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Millie Bobby Brown Reacts to the Damsel Trailer",
//                 "key": "5fv9UdRC8eg",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Featurette",
//                 "official": true,
//                 "published_at": "2024-02-14T17:30:00.000Z",
//                 "id": "65ce700403bf840181c604a5"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Official Trailer",
//                 "key": "iM150ZWovZM",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Trailer",
//                 "official": true,
//                 "published_at": "2024-02-13T14:00:00.000Z",
//                 "id": "65cba4d28c44b90180940788"
//             },
//             {
//                 "iso_639_1": "en",
//                 "iso_3166_1": "US",
//                 "name": "Official Teaser",
//                 "key": "9eN_AGX8GXk",
//                 "site": "YouTube",
//                 "size": 1080,
//                 "type": "Teaser",
//                 "official": true,
//                 "published_at": "2023-11-11T21:07:03.000Z",
//                 "id": "654fee8bd4fe04011b8e9d1c"
//             }
//         ]
// }
