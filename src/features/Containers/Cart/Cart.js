import React, { useEffect } from 'react';
import classes from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  clear,
  total,
  selectTotal,
  increase,
  decrease,
} from './cartSlice';

const Cart = () => {
  const cartItemsValue = useSelector(selectCartItems);
  const totalValue = useSelector(selectTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total());
  }, []);

  const cartItems = cartItemsValue.map(item => {
    return (
      <div className={classes.SingleItem}>
        <div className={classes.ImgContainer}>
          <img src={item.image} className={classes.Img} alt="" />
        </div>
        <span className={classes.Name}>{item.title}</span>
        <span className={classes.Price}>{item.price}</span>
        <div className={classes.Amount}>
          <FontAwesomeIcon
            icon={faCaretUp}
            onClick={() => dispatch(increase(item._id))}
          />
          <span>{item.amount}</span>
          <FontAwesomeIcon
            icon={faCaretDown}
            onClick={() => dispatch(decrease(item._id))}
          />
        </div>
      </div>
    );
  });

  return (
    <div className={classes.Container}>
      <h1 className={classes.Heading}>Cart Items</h1>
      {cartItems}
      <hr />
      <div className={classes.Total}>
        <span>Total</span>
        <span>${totalValue}</span>
      </div>
      <div className={classes.Buttons}>
        <button onClick={() => dispatch(clear())} className={classes.Clear}>
          Clear Cart
        </button>
        <button className={classes.Checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
