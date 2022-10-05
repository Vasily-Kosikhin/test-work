import React from 'react';
import styles from './NotExistingPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { appPaths } from '../../utils/constants';

const NotExistingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.content}>
      <div className={styles.noCard}>
        Сейчас нет такой страницы, но скоро появится!
        <button
          className={styles.orderButton}
          onClick={() => navigate(appPaths.order)}
        >
          На главную
        </button>
      </div>
    </div>
  );
};

export default NotExistingPage;
