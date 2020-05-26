import React from 'react';
import classes from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../Containers/Cart/cartSlice';

const Navbar = () => {
  // const cartItemsValue = useSelector(selectCartItems);
  // console.log(cartItemsValue);
  // const totalItems = cartItemsValue.reduce(
  //   (acc, curr) => (acc += curr.amount),
  //   0
  // );

  return (
    <div className={classes.Container}>
      <div className={classes.Navbar}>
        <h1 className={classes.Logo}>
          Tech<span>store</span>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              <span className={classes.CartAmount}>
                {/* {totalItems > 0 ? totalItems : 0} */}
              </span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
