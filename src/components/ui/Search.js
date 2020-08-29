import React, { useState, useCallback, Fragment } from 'react';
import _ from 'lodash';

const Search = ({ getQuery, setCurrentPage, totalPages, currentPage }) => {
  const [text, setText] = useState('');
  const [genre, setGenre] = useState('');

  const handleOnSearch = (textVal, genreVal) => {
    setCurrentPage(1);
    if (genreVal.length && textVal.length)
      getQuery(`${textVal}&type=${genreVal}`);
    else if (textVal.length)
      getQuery(textVal);
  };

  const debounceSave = useCallback(
    _.debounce((textVal, genreVal) => handleOnSearch(textVal.trim(), genreVal), 700),
    [],
  );

  const handleOnChange = (e, isGenre) => {
    if (isGenre) {
      setGenre(e.target.value);
      debounceSave(text, e.target.value)
    }
    else {
      setText(e.target.value);
      debounceSave(e.target.value, genre);
    }
  }

  const handlePagination = (whereTo) => {
    if (whereTo === 'prev') {
      if (currentPage !== 1)
        setCurrentPage(currentPage - 1)
    }
    else {
      if (totalPages !== currentPage)
        setCurrentPage(currentPage + 1)
    }
  }

  return (
    <Fragment>
      <section className='search'>
        <input
          type='text'
          className='form-control'
          placeholder='Search...'
          value={text}
          onChange={handleOnChange}
          autoFocus
        />
        <select className="search-dropdown" name="genres" id="genres" value={genre} onChange={(e) => handleOnChange(e, true)}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
      </section>
      {totalPages > 1 && <div className="paginator-holder">
        <button onClick={() => handlePagination("prev")} className="paginator">{'<'}</button>
        <span>{currentPage}</span>
        <button onClick={() => handlePagination("next")} className="paginator">{'>'}</button>
      </div>}
    </Fragment>
  )
}

export default Search
