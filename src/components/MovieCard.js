import React from 'react'
import { IMG_CDN } from '../utils/Constant'

// const MovieCard = ({posterPath}) => {
//   return (
//     <div>
//         <img alt='Movie Card' src={IMG_CDN + posterPath}/>
//     </div>
//   )
// }



const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-5'>
      <img alt="Movie Card" src={IMG_CDN + posterPath} />
    </div>
  );
};
export default MovieCard
