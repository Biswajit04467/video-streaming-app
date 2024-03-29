import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-sreen aspect-video pt-[15%]  px-24 absolute text-white bg-gradient-to-r from-black '>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div>
                <button className=' bg-white text-black p-3 px-10 text-xl rounded-md hover:bg-opacity-80'>▶️ Play</button>
                <button className=' bg-gray-500 text-white mx-2 p-3 px-10 text-xl bg-opacity-50  rounded-md hover:bg-opacity-80'> ⓘ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
