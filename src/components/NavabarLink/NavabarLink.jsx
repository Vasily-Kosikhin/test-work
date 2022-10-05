import React from 'react';
import styles from './NavabarLink.module.scss';
import { Link, useLocation } from 'react-router-dom';

const NavabarLink = (props) => {
  const location = useLocation();
  const rootStyle = [styles.link, styles.link_padding];
  const resultStyle = () => {
    if (location.pathname === props.link) {
      rootStyle.push(styles.link_active);
      return rootStyle.join(' ');
    }
    return rootStyle.join(' ');
  };

  return (
    <Link to={props.link || '/'} className={styles.link}>
      <div className={resultStyle()}>
        <div className={styles.icon}>
          <div className={styles[`icon__${props.icon}`]}></div>
        </div>
        <div className={styles.link__text}>{props.text}</div>
      </div>
    </Link>
  );
};

export default NavabarLink;
