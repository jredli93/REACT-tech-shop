import React from 'react';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <span className={classes.Logo}>
        Tech<span>store</span>
      </span>
    </div>
  );
};

export default Footer;
