import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const [genre, setGenre] = useState('');

  const handleOnSearch = (e) => {
    e.preventDefault();
    if (genre.length && text.length)
      getQuery(`${text}&type=${genre}`);
    else
      getQuery(text);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <select className="search-dropdown" name="genres" id="genres" onChange={(e) => setGenre(e.target.value)}>
          <option value="">All</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button className="search-button" type="submit" onClick={handleOnSearch}>Search</button>
      </form>
    </section>
  )
}

export default Search
