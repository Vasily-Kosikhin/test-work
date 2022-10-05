import React from 'react';
import styles from './Navbar.module.scss';
import NavabarLink from '../NavabarLink/NavabarLink';
import { iconTypes, appPaths } from '../../utils/constants';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__header}>
        <div className={styles.logo}></div>
        <div className={styles.menu}></div>
      </div>
      <div className={styles.navbar__body}>
        <NavabarLink
          text={'Заказать VPS'}
          icon={iconTypes.order}
          link={appPaths.order}
        ></NavabarLink>
        <NavabarLink
          text={'АККАУНТ'}
          icon={iconTypes.account}
          link={appPaths.account}
        ></NavabarLink>
        <NavabarLink
          text={'СЕРВЕРЫ'}
          icon={iconTypes.server}
          link={appPaths.server}
        ></NavabarLink>
        <NavabarLink
          text={'МОНИТОРИНГ'}
          icon={iconTypes.monitoring}
          link={appPaths.monitoring}
        ></NavabarLink>
        <NavabarLink
          text={'ДОМЕНЫ'}
          icon={iconTypes.domains}
          link={appPaths.domains}
        ></NavabarLink>
        <NavabarLink
          text={'SSL'}
          icon={iconTypes.ssl}
          link={appPaths.ssl}
        ></NavabarLink>
        <NavabarLink
          text={'МАГАЗИН'}
          icon={iconTypes.shop}
          link={appPaths.shop}
        ></NavabarLink>
        <NavabarLink
          text={'SEO И РЕКЛАМА'}
          icon={iconTypes.seo}
          link={appPaths.seo}
        ></NavabarLink>
        <NavabarLink
          text={'ПОДДЕРЖКА'}
          icon={iconTypes.support}
          link={appPaths.support}
        ></NavabarLink>
        <NavabarLink
          text={'ЕСТЬ ИДЕЯ'}
          icon={iconTypes.idea}
          link={appPaths.idea}
        ></NavabarLink>
      </div>
    </div>
  );
};

export default Navbar;
