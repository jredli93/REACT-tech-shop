import React from 'react';
import classes from '../Filters/Filters.module.scss';

const Filters = ({
  categoryHandler,
  priceHandler,
  price,
  dealHandler,
  rating,
  maxPrice,
  search,
  searchHandler,
  ratingHandler,
}) => {
  return (
    <div className={classes.Container}>
      <div className={classes.FormBlock}>
        <label>Search</label>
        <input
          type="text"
          value={search}
          onChange={searchHandler}
          placeholder="Search term"
          className={classes.Search}
        />
      </div>

      <div className={classes.FormBlock}>
        <label>Category</label>
        <select
          onChange={categoryHandler}
          className={classes.Category}
          name="category"
        >
          <option value="0">All</option>
          <option value="1">Tv</option>
          <option value="2">Phone</option>
          <option value="2">Laptop</option>
        </select>
      </div>
      <div className={classes.FormBlock}>
        <label>
          Price:<b> ${price}</b>
        </label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          onChange={priceHandler}
          value={price}
          max={maxPrice}
          className={classes.Price}
        />
      </div>
      <div className={classes.FormBlock}>
        <label>
          Rating:<b> {rating}</b>
        </label>
        <input
          type="range"
          min="1"
          max="5"
          name="rating"
          value={rating}
          onChange={ratingHandler}
          className={classes.Rating}
        />
      </div>
      <div className={classes.FormBlock}>
        <label>Deal</label>
        <input
          type="checkbox"
          onChange={dealHandler}
          name="deal"
          className={classes.Deal}
        />
      </div>
    </div>
  );
};

export default Filters;
