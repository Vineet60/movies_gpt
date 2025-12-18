import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from '../utils/MoviesSlice';
import { API_OPTIONS } from "../utils/Constant";
const useMovieTrailer =(movieID)=>{

    const dispatch = useDispatch();

      {/* fetch trailer video && updating the store with trailer video data*/}
        const getMovieVideos = async()=> {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID +'/videos?language=en-US',API_OPTIONS)
        const json = await data.json();

        const filterData = json.results.filter((video)=>video.type==='Trailer')
        const trailer = filterData.length?filterData[0]:json.results[0] ;
        dispatch(addTrailerVideo(trailer));
    }    
   useEffect(()=>{
    getMovieVideos()
   },[])
}

export default useMovieTrailer;