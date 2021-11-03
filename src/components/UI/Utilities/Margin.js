import React from 'react';
import classes from './Margin.module.css';
const Margin = ({ dir }) => {
  //dir : 'buttom' 'top' 'right' 'left'
  return <div className={classes[dir]}></div>;
};

export default Margin;
