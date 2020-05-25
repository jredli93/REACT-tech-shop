import React from 'react';
import classes from './Cta.module.scss';
import laptop from '../../../assets/images/laptop.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Cta = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Center}>
        <div className={classes.Cta}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            vero!
          </h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          <button className={classes.CtaButton}>Products</button>
        </div>
        <div className={classes.ImgContainer}>
          <img src={laptop} alt="" className={classes.Img} />
        </div>
        <span className={classes.Arrow}>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </span>
      </div>
    </div>
  );
};

export default Cta;
