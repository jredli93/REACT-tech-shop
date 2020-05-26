import React, { useEffect, useState } from 'react';
import classes from './ProductDetails.module.scss';
import axios from '../../../axios/axiosProducts';
import Spinner from '../UI/Spinner/Spinner';
import { addCartItem } from '../../Containers/Cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const ProductDetails = props => {
  const [product, setProduct] = useState([]);
  const [description, setDescription] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/articles.json?orderBy="_id"&equalTo="${props.match.params.id}"`)
      .then(res => {
        let productKey = Object.keys(res.data)[0];
        setProduct(res.data[productKey]);
        setDescription(res.data[productKey].description);
      })
      .catch(err => console.log(err));
  }, []);

  const { brand, category, deal, image, price, rating, title } = product;

  let desc = description.map(item => <li>{item.info}</li>);

  return (
    <div className={classes.Container}>
      <div className={classes.ImgContainer}>
        <img className={classes.Img} src={image} alt="" />
      </div>
      <div className={classes.Info}>
        <h1 className={classes.Title}>{title}</h1>
        <span className={classes.Price}>{price}</span>
        <div className={classes.Description}>
          <ul>{desc ? desc : <Spinner />}</ul>
        </div>
        <div className={classes.Additional}>
          <span>{category}</span>
          <span>{brand}</span>
        </div>
        <button
          onClick={() => dispatch(addCartItem(product))}
          className={classes.Button}
        >
          Add to cart
        </button>
      </div>
      {product.deal && <span className={classes.Deal}>Deal</span>}
    </div>
  );
};

export default ProductDetails;
