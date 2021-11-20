import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery('');
  }

  function handelChange(e) {
    setSearchQuery(e.target.value.toLowerCase());
  }

  return (
    <>
      <h1>Search images</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={searchQuery}
            onChange={handelChange}
            className={s.search_form}
            placeholder="Search images..."
            required
          />
        </label>
        <button type="submit" className={s.search_button}>
          Search
        </button>
      </form>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
