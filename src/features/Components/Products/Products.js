import React, { useEffect } from 'react';
import classes from '../Products/Products.module.scss';
import Filters from '../Filters/Filters';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import Spinner from '../UI/Spinner/Spinner';
import { capitalize, flatNumber } from '../../../helper';
import { useSelector, useDispatch } from 'react-redux';
import {
  deal,
  rating,
  search,
  price,
  category,
  selectSearch,
  selectRating,
  selectMaxPrice,
  selectDeal,
  selectCategory,
  selectPrice,
  fetchData,
  selectLoading,
  selectProducts,
} from './productsSlice';

const Products = () => {
  const searchValue = useSelector(selectSearch);
  const ratingValue = useSelector(selectRating);
  const priceValue = useSelector(selectPrice);
  const maxPriceValue = useSelector(selectMaxPrice);
  const productsValue = useSelector(selectProducts);
  const loadingValue = useSelector(selectLoading);
  const categoryValue = useSelector(selectCategory);
  const dealValue = useSelector(selectDeal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // filtered items
  let filteredItems = productsValue
    .filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(item => item.rating <= ratingValue)
    .filter(item => item.deal === dealValue)
    .filter(item => {
      if (categoryValue != 'All') {
        return item.category === categoryValue;
      } else return item.category;
    })
    .filter(
      item => parseInt(flatNumber(item.price).slice(1)) <= parseInt(priceValue)
    )
    .map(item => <SingleProduct key={item._id} product={item} />);

  // category
  const categoryHandler = event => {
    let index = event.nativeEvent.target.selectedIndex;
    dispatch(category(capitalize(event.nativeEvent.target[index].text)));
  };

  // rating
  const ratingHandler = event => {
    dispatch(rating(+event.target.value));
  };

  //deal
  const dealHandler = () => {
    dispatch(deal());
  };

  // search
  const searchHandler = event => {
    dispatch(search(event.target.value));
  };

  //price
  const priceHandler = event => {
    dispatch(price(+event.target.value));
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Center}>
        <div className={classes.Heading}>
          <h1>Our Products</h1>
          <span className={classes.Subtitle}>Search and buy</span>
        </div>
        <Filters
          rating={ratingValue}
          ratingHandler={ratingHandler}
          categoryHandler={categoryHandler}
          dealHandler={dealHandler}
          priceHandler={priceHandler}
          price={priceValue}
          maxPrice={maxPriceValue}
          searchHandler={searchHandler}
          search={searchValue}
        />
        <div className={classes.SingleContainer}>
          {loadingValue ? (
            <Spinner />
          ) : filteredItems.length === 0 ? (
            <span className={classes.FilterMessage}>
              No items match selected criteria
            </span>
          ) : (
            filteredItems
          )}
          {/* {filteredItems} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
