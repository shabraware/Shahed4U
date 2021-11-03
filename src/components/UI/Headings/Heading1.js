import React from 'react';
import classes from './Heading1.module.css';
const Heading1 = ({ text }) => {
  return <h1 className={classes.heading1}>{text}</h1>;
};
export default Heading1;
