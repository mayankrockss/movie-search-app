import React, { Fragment } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../ui/Spinner';
import _ from 'lodash';

const MovieGrid = ({ items, isLoading, addOrRemoveFavourite, favourites }) => {

  const isFavourite = (item) => {
    return !!favourites.find(fav => _.isEqual(fav, item))
  };

  return isLoading ? (
    <Spinner />
  ) : (
      <Fragment>{items && !!items.length &&
        <section className='cards'>
          {items.map((item) => (item &&
            <MovieItem key={item.imdbID} item={item} addOrRemoveFavourite={addOrRemoveFavourite} isFavourite={isFavourite(item)}></MovieItem>
          )
          )}
        </section>}
      </Fragment>

    )
}

export default MovieGrid
