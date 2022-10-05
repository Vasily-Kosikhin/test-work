import React, { useState } from 'react';
import DropMenu from '../DropMenu/DropMenu';
import VPSCard from '../VPSCard/VPSCard';
import styles from './ContentPage.module.scss';
import { useSelector } from 'react-redux';
import { dropMenuTypes } from '../../utils/constants';

const ContentPage = () => {
  const { categories, vpsPlans, selectedPlans } = useSelector(
    (store) => store.vps
  );

  const cardBodyStyles = [styles.cardBody, styles.cardBody_postion];
  const searchContainerStyles = [
    styles.searchContainer,
    styles.searchContainer_positon
  ];

  return (
    <div className={styles.content}>
      <div className={styles.modalBack}>
        <div className={styles.content__name}></div>
        <div className={searchContainerStyles.join(' ')}>
          <div className={styles.searchContainer__title}></div>
          <DropMenu
            width={'232px'}
            options={categories}
            defaultRequest={'Все'}
            type={dropMenuTypes.vpsSearch}
          ></DropMenu>
        </div>
        <div className={cardBodyStyles.join(' ')}>
          {selectedPlans.length !== 0 ? (
            selectedPlans.map((plan) => (
              <VPSCard
                style={{ margin: '20px' }}
                className={styles.vpsCard}
                vpsPlan={plan}
                key={plan.id}
              />
            ))
          ) : (
            <div className={styles.noCard}>
              Очень сожалеем, но данного товара нет в наличии. Если Вы
              подпишитесь на обновления, мы обязательно сообщим, как только
              данная позиция станет снова доступной для покупки.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
