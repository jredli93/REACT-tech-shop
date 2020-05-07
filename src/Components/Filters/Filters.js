import React from 'react';
import classes from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.FormBlock}>
        <label>Search</label>
        <input
          type="text"
          placeholder="Search term"
          className={classes.Search}
        />
      </div>

      <div className={classes.FormBlock}>
        <label>Category</label>
        <select className={classes.Category} name="category">
          <option value="0">Select...</option>
          <option value="1">Tv</option>
          <option value="2">Phone</option>
          <option value="2">Laptop</option>
        </select>
      </div>
      <div className={classes.FormBlock}>
        <label>Price</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="50"
          className={classes.Price}
        />
      </div>
      <div className={classes.FormBlock}>
        <label>Rating</label>
        <input
          type="range"
          min="1"
          max="5"
          name="rating"
          className={classes.Rating}
        />
      </div>
      <div className={classes.FormBlock}>
        <label>Deal</label>
        <input type="checkbox" name="deal" className={classes.Deal} />
      </div>
    </div>
  );
};

export default Filters;
