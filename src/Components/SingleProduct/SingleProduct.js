import React from 'react';
import classes from './SingleProduct.module.scss';
import image from '../../assets/images/laptop.png';

const SingleProduct = ({ product }) => {
  return (
    <div className={classes.Product}>
      <div className={classes.ImgContainer}>
        <img className={classes.Img} src={image} alt="" />
      </div>
      <div className={classes.Info}>
        <span className={classes.Name}>Apple IPhone 11 Pro</span>
        <span className={classes.Price}>$999.99</span>
      </div>
      <div className={classes.Overlay}>
        <button className={classes.Link}>Details</button>
      </div>
    </div>
  );
};

export default SingleProduct;
