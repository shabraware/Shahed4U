import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import userImage from '../../../images/user.png';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Shahed4U</Link>
      </div>
      <div className={classes.avatar}>
        <img src={userImage} alt="user"></img>
      </div>
    </header>
  );
};

export default Header;
