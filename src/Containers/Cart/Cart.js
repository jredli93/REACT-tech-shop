import React from 'react';
import classes from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import laptop from '../../assets/images/laptop.png';

const Cart = () => {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Heading}>Cart Items</h1>
      <div className={classes.SingleItem}>
        <div className={classes.ImgContainer}>
          <img src={laptop} className={classes.Img} alt="" />
        </div>
        <span className={classes.Name}>Dell Laptop</span>
        <span className={classes.Price}>$1000</span>
        <div className={classes.Amount}>
          <FontAwesomeIcon icon={faCaretUp} />
          <span>5</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <hr />
      <div className={classes.Total}>
        <span>Total</span>
        <span>$1000</span>
      </div>
      <div className={classes.Buttons}>
        <button className={classes.Clear}>Clear Cart</button>
        <button className={classes.Checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
