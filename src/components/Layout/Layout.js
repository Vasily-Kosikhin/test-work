import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';

const Layout = () => {
  const { isLoading } = useSelector((store) => store.vps);

  const accountInfoRootStyle = [
    styles.header__accountInfo,
    styles.header__accountInfo_positon
  ];

  return (
    <div className={styles.layout}>
      <Navbar></Navbar>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={accountInfoRootStyle.join(' ')}></div>
        </header>
        {isLoading ? (
          <div className={styles.vpsLoadingBack}>
            <Spinner></Spinner>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.license}></div>
          <div className={styles.appLink}></div>
          <div className={styles.contactInfo}></div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
