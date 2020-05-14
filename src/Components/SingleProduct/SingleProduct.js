import React from 'react';
import classes from './SingleProduct.module.scss';
import { Link } from 'react-router-dom';
import image from '../../assets/images/laptop.png';

const SingleProduct = ({ product }) => {
  const { image, price, title } = product;
  return (
    <div className={classes.Product}>
      <div className={classes.ImgContainer}>
        <img className={classes.Img} src={image} alt="" />
      </div>
      <div className={classes.Info}>
        <span className={classes.Name}>{title}</span>
        <span className={classes.Price}>{price}</span>
      </div>
      <div className={classes.Overlay}>
        <Link to={`/product/${product._id}`} className={classes.Link}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
