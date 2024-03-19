import React from 'react'
import { IMG_CDN } from '../utils/constant'
const MovieCard = ({posterPath}) => {
  console.log(IMG_CDN+posterPath)
  return (
    <div>
      <img className=" w-40 " src={IMG_CDN+posterPath} alt="" />
    </div>
  )
}

export default MovieCard;
