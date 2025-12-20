import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GPTSearch/> :
       <><MainContainer/>
        <SecondaryContainer/></> 
      }
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