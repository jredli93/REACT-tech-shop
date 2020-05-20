import React, { useState, useEffect } from 'react';
import classes from './Products.module.scss';
import Filters from '../Filters/Filters';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import axios from '../../axios/axiosProducts';
import Spinner from '../UI/Spinner/Spinner';
import { capitalize, flatNumber } from '../../helper';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [deal, setDeal] = useState(false);
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [price, setPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios
        .get('/articles.json')
        .then(res => {
          const allProducts = [];
          let max = 0;
          for (let key in res.data) {
            let currPrice = parseInt(flatNumber(res.data[key].price).slice(1));
            if (currPrice > max) {
              max = currPrice;
              setMaxPrice(max);
              setPrice(max);
            }
            allProducts.push(res.data[key]);
          }
          setProducts(allProducts);
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  // filtered items
  let filteredItems = products
    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(item => item.rating <= rating)
    .filter(item => item.deal === deal)
    .filter(item => {
      if (category != 'All') {
        return item.category === category;
      } else return item.category;
    })
    .filter(
      item => parseInt(flatNumber(item.price).slice(1)) <= parseInt(price)
    )
    .map(item => <SingleProduct key={item._id} product={item} />);

  // category
  const categoryHandler = event => {
    let index = event.nativeEvent.target.selectedIndex;
    setCategory(capitalize(event.nativeEvent.target[index].text));
  };

  // rating
  const ratingHandler = event => {
    setRating(+event.target.value);
  };

  //deal
  const dealHandler = () => {
    setDeal(deal => !deal);
  };

  // search
  const searchHandler = event => {
    setSearch(event.target.value);
  };

  //price
  const priceHandler = event => {
    setPrice(+event.target.value);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Center}>
        <div className={classes.Heading}>
          <h1>Our Products</h1>
          <span className={classes.Subtitle}>Search and buy</span>
        </div>
        <Filters
          rating={rating}
          ratingHandler={ratingHandler}
          categoryHandler={categoryHandler}
          dealHandler={dealHandler}
          priceHandler={priceHandler}
          price={price}
          maxPrice={maxPrice}
          searchHandler={searchHandler}
          search={search}
        />
        <div className={classes.SingleContainer}>
          {loading ? (
            <Spinner />
          ) : filteredItems.length === 0 ? (
            <span className={classes.FilterMessage}>
              No items match selected criteria
            </span>
          ) : (
            filteredItems
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
