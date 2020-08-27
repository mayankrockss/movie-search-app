import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';

const MovieItem = ({ item, addOrRemoveFavourite, isFavourite }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.Poster} alt='' />
        </div>
        <div className='card-back'>
          <Link to={`/${item.imdbID}`}>
            <h1>{item.Title}</h1>
          </Link>
          <ul>
            <li>
              <strong>Type:</strong> {item.Type}
            </li>
            <li>
              <strong>Year:</strong> {item.Year}
            </li>
            <li>
              <strong>imdbID:</strong> {item.imdbID}
            </li>
            <span className="fav-icon" onClick={() => addOrRemoveFavourite(item, isFavourite)}>{!!isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}</span>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieItem
