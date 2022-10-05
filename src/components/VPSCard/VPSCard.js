import React, { useEffect, useState } from 'react';
import styles from './VPSCard.module.scss';
import { useSelector } from 'react-redux';
import DropMenu from '../DropMenu/DropMenu';
import ToggleButton from '../ToggleButton/ToggleButton';
import { dropMenuTypes } from '../../utils/constants';

const VPSCard = ({ vpsPlan }) => {
  const { vpsPlans, selectOs } = useSelector((store) => store.vps);
  const [selectedOS, setSelectedOS] = useState(selectOs[0].panel_type);

  const categoryIconsStyles = {
    turbo: styles.category__icon_turbo,
    nvme: styles.category__icon_ssd,
    hdd: styles.category__icon_hdd
  };

  const vpsCardBackgroundColor = () => {
    const VPSCardStyle = [styles.VPSCard];
    const VPSCardBacgroundStyles = {
      turbo: styles.VPSCard_turbo,
      nvme: styles.VPSCard_nvme,
      hdd: styles.VPSCard_hdd
    };
    VPSCardStyle.push(VPSCardBacgroundStyles[vpsPlan.category]);
    return VPSCardStyle.join(' ');
  };
  const cpuFrequencyText = {
    turbo: '× 5 ГГц ',
    nvme: '× 2,8 ГГц ',
    hdd: '× 2,1 ГГц '
  };

  return (
    <div className={vpsCardBackgroundColor()}>
      <div className={styles.category}>
        <div className={categoryIconsStyles[vpsPlan.category]}></div>
        <div className={styles.category__name}>{vpsPlan.name}</div>
      </div>
      <div className={styles.price}>{vpsPlan.price_per_month} ₽/мес.</div>
      <div className={styles.hardware}>
        <div className={styles.hardware__item}>
          <div className={styles.hardware__name}>CPU</div>
          <div className={styles.hardware__parameters}>
            {vpsPlan.cpu_cores} {cpuFrequencyText[vpsPlan.category]}
          </div>
        </div>
        <div className={styles.hardware__item}>
          <div className={styles.hardware__name}>RAM</div>
          <div className={styles.hardware__parameters}>{vpsPlan.ram}МБ</div>
        </div>
        <div className={styles.hardware__item}>
          <div className={styles.hardware__name}>DISK</div>
          <div className={styles.hardware__parameters}>
            {`${vpsPlan.volume_disk} ${vpsPlan.disk_type}`}
          </div>
        </div>
      </div>
      <div className={styles.distribution}>
        <div className={styles.distribution__title}>Дистрибутив</div>
        <DropMenu
          width={'192px'}
          options={selectOs}
          type={dropMenuTypes.distribution}
          setSelectedOS={setSelectedOS}
        ></DropMenu>
      </div>
      <div className={styles.software}>
        <div className={styles.software__title}>Программное обеспечение</div>
        <DropMenu
          width={'192px'}
          defaultRequest={'Без ПО'}
          options={selectedOS}
          type={dropMenuTypes.software}
        ></DropMenu>
      </div>
      <div className={styles.dataCenter}>
        <div className={styles.dataCenter__title}>Дата-центр</div>
        <ToggleButton first={'Санкт-Петербург'} second={'Москва'} />
      </div>
      <div className={styles.bonusOffer}>
        <div className={styles.bonusOffer__icon}></div>
      </div>
      <div className={styles.orderPart}>
        <button className={styles.orderButton}>Заказать</button>
      </div>
    </div>
  );
};

export default VPSCard;
