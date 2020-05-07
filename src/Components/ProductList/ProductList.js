import React from 'react';
import classes from './ProductList.module.scss';
import image from '../../assets/images/laptop.png';

const ProductList = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Product}>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} src={image} alt="" />
        </div>
        <div className={classes.Info}>
          <span className={classes.Name}>Apple IPhone 11 Pro</span>
          <span className={classes.Price}>$999.99</span>
        </div>
      </div>
      <div className={classes.Product}>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} src={image} alt="" />
        </div>
        <div className={classes.Info}>
          <span className={classes.Name}>Apple IPhone 11 Pro</span>
          <span className={classes.Price}>$999.99</span>
        </div>
      </div>
      <div className={classes.Product}>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} src={image} alt="" />
        </div>
        <div className={classes.Info}>
          <span className={classes.Name}>Apple IPhone 11 Pro</span>
          <span className={classes.Price}>$999.99</span>
        </div>
      </div>
      <div className={classes.Product}>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} src={image} alt="" />
        </div>
        <div className={classes.Info}>
          <span className={classes.Name}>Apple IPhone 11 Pro</span>
          <span className={classes.Price}>$999.99</span>
        </div>
      </div>
      <div className={classes.Product}>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} src={image} alt="" />
        </div>
        <div className={classes.Info}>
          <span className={classes.Name}>Apple IPhone 11 Pro</span>
          <span className={classes.Price}>$999.99</span>
        </div>
      </div>
      <div className={classes.Product}>
        <div className={classes.ImgContainer}>
          <img className={classes.Img} src={image} alt="" />
        </div>
        <div className={classes.Info}>
          <span className={classes.Name}>Apple IPhone 11 Pro</span>
          <span className={classes.Price}>$999.99</span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
