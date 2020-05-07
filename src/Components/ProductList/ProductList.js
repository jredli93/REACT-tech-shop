import React, { useEffect, useState } from 'react';
import classes from './ProductList.module.scss';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import axios from '../../axios/axiosProducts';
import Spinner from '../UI/Spinner/Spinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/articles.json')
      .then(res => {
        const allProducts = [];
        for (let key in res.data) {
          allProducts.push(res.data[key]);
        }
        setProducts(allProducts);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const allProducts = products.map(product => (
    <SingleProduct key={product._id} product={product} />
  ));

  return (
    <div className={classes.Container}>
      {loading === false ? allProducts : <Spinner />}
    </div>
  );
};

export default ProductList;
