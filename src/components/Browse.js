import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* MainContainer
        -VideoBackground
        -VideoTitle
      SecondaryContainer
        -MovieList*name
        -cards*n   */}

    </div>
  )
}

export default Browse