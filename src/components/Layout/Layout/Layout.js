import { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Layout.module.css';
const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
