import React from 'react';
import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Navbar}>
        <h1 className={classes.Logo}>
          Tech<span>store</span>
        </h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
