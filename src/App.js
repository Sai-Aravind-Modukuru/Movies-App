import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Searchbox from "./components/Searchbox";
import MovieListHeading from './components/MovieListHeading';
import AddFavourite from "./components/AddFavourites";
import RemoveFavourites from './components/RemoveFavourites';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c571c627`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }; 
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-fav", JSON.stringify(items));
  }


  const AddFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList);
  }
  const RemoveFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    )
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (

    <div className='container-fluid movie-app'>
      <div className='row'>
        <MovieListHeading heading="Movies" />
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className='row'>
        <div className='one'>
          <MovieList
            movies={movies}
            handleFavouritesClick={AddFavouriteMovie}
            favouriteComponent={AddFavourite}
          />
        </div>
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="Favourites" />
      </div>
      <div className='row'>
        <div className='two'>
          <MovieList
            movies={favourites}
            handleFavouritesClick={RemoveFavouriteMovie}
            favouriteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </div>



  )
}

export default App
