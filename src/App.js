import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/ui/Header';
import MovieGrid from './components/MovieComponents/MovieGrid';
import Search from './components/ui/Search';
import { Switch, Route } from 'react-router-dom';
import _ from 'lodash';
import PageNotFound from './components/PageNotFound';
import WebStorage from './WebStorage';
import MovieDetails from './components/MovieComponents/MovieDetails';
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [favourites, setFavourites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      let result = null;

      if (query.length) {
        result = await axios(`https://www.omdbapi.com/?apikey=5ffea7a1&s=${query}&page=${currentPage}`)
      };

      if (result?.data?.Response === "False")
        alert(result?.data?.Error + ' Please try again with diffrent input!');
      if (result) {
        setItems(result.data);
        setTotalPages(Math.ceil(result.data.totalResults / 10));
      }
      setIsLoading(false);
    }
    fetchItems();
  }, [query, currentPage]);

  useEffect(() => {
    setFavourites(JSON.parse(WebStorage.webStorage.getItem('Favourites') || '[]'));
  }, []);

  useEffect(() => {
    WebStorage.webStorage.setItem('Favourites', JSON.stringify(favourites));
  }, [favourites])

  const addOrRemoveFavourite = (item, isFavourite) => {
    if (isFavourite) {
      const updatedList = [...favourites];
      updatedList.forEach((fav, i) => {
        if (_.isEqual(item, fav)) {
          updatedList.splice(i, 1);
        }
      });
      setFavourites(updatedList);
    } else
      setFavourites([...favourites, item]);
  };

  return (
    <div className='container'>
      <Header />
      <Switch>
        <Route path="/favourites">
          <MovieGrid isLoading={isLoading} items={favourites} addOrRemoveFavourite={addOrRemoveFavourite} favourites={favourites} />
        </Route>
        <Route path="/" exact>
          <>
            <Search getQuery={(q) => setQuery(q)} setCurrentPage={setCurrentPage} totalPages={totalPages} currentPage={currentPage} />
            <MovieGrid isLoading={isLoading} items={items.Search} addOrRemoveFavourite={addOrRemoveFavourite} favourites={favourites} />
          </>
        </Route>
        <Route path="/movie/:id"><MovieDetails /></Route>
        <Route path='*'><PageNotFound /></Route>
      </Switch>


    </div>
  )
}

export default App
