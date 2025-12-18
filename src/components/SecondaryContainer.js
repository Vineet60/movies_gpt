import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div className='bg-black'>
      <div className='-mt-60 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Treanding"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"New Release"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer