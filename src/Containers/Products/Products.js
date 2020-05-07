import React from 'react';
import classes from './Products.module.scss';
import Filters from '../../Components/Filters/Filters';
import ProductList from '../../Components/ProductList/ProductList';

const Products = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Center}>
        <div className={classes.Heading}>
          <h1>Our Products</h1>
          <span className={classes.Subtitle}>Search and buy</span>
        </div>
        <Filters />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
