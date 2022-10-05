import React, { useEffect, useState } from 'react';
import styles from './DropMenu.module.scss';
import {
  dropMenuTypes,
  ispConvert,
  ispConverter,
  searchOptions
} from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllPlansAction,
  selectVpsPlansAction
} from '../../store/reducers/vpsConfigReducer';

const DropMenu = (props) => {
  const [searchText, setSearchText] = useState({
    id: 'all',
    text: `${props.defaultRequest || props?.options[0]?.description || ''}`
  });
  const [isOpen, setIsOpen] = useState(false);
  const { selectPanel } = useSelector((store) => store.vps);

  useEffect(() => {
    if (props.type === dropMenuTypes.software) {
      if (searchText.id === 'all') {
        return;
      }
      const name = ispConverter(
        selectPanel.find((e) => e.id === searchText.id).name
      );
      if (props.options.includes(name)) {
        return;
      }
      setSearchText({ id: '7', text: 'Без ПО' });
    }
  }, [props.options]);

  const dispatch = useDispatch();
  const availableOS = [];
  const dropMenuStyles = [styles.dropMenu, styles.dropMenu_show];
  const dropMenuOptionStyles = [
    styles.dropMenu__option,
    styles.dropMenu__body_active
  ];

  const dropOptionClickHandler = (category) => {
    if (props.type === dropMenuTypes.vpsSearch) {
      const selectOption = (category) => {
        dispatch(selectVpsPlansAction([category.id]));
        setSearchText({ id: category.id, text: searchOptions[category.slug] });
      };
      return selectOption(category);
    }

    if (props.type === dropMenuTypes.distribution) {
      const selectDestribution = (category) => {
        props.setSelectedOS(category.panel_type);
        setSearchText({ id: category.id, text: category.description });
      };
      return selectDestribution(category);
    }

    if (props.type === dropMenuTypes.software) {
      const selectSoftware = (category) => {
        setSearchText({ id: category.id, text: category.description });
      };
      return selectSoftware(category);
    }
  };

  const findAvailableOS = (arr) => {
    for (let elem of props.options) {
      if (elem === 'isp') {
        for (let el of selectPanel.filter((el) => el.name.includes('isp6'))) {
          arr.push(el);
        }
      }
      if (selectPanel.find((el) => el.name === elem)) {
        arr.push(selectPanel.find((el) => el.name.includes(elem)));
      }
    }
  };

  if (props.type === dropMenuTypes.software) {
    findAvailableOS(availableOS);
  }

  const resetOption = () => {
    dispatch(selectAllPlansAction());
    setSearchText({ id: 'all', text: 'Все' });
  };

  return (
    <div
      className={isOpen ? dropMenuStyles.join(' ') : styles.dropMenu}
      style={{ width: `${props.width || '232px'}` }}
      onClick={() => setIsOpen((p) => !p)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.dropMenu__text}>{searchText.text}</div>
      <div
        className={styles.dropMenu__body}
        style={{ width: `${props.width || '232px'}` }}
      >
        {props.type !== dropMenuTypes.software &&
          props.options.map((category, index) => (
            <div
              onClick={() => {
                dropOptionClickHandler(category);
              }}
              key={category.id || index}
              className={
                searchText.id === category.id
                  ? dropMenuOptionStyles.join(' ')
                  : styles.dropMenu__option
              }
            >
              {category?.description || category?.name || category}
            </div>
          ))}
        {availableOS.map((os) => (
          <div
            onClick={() => {
              dropOptionClickHandler(os);
            }}
            key={os.id}
            className={
              searchText.id === os.id
                ? dropMenuOptionStyles.join(' ')
                : styles.dropMenu__option
            }
          >
            {os?.description}
          </div>
        ))}
        {props.type === dropMenuTypes.vpsSearch && (
          <div
            className={
              searchText.id === 'all'
                ? dropMenuOptionStyles.join(' ')
                : styles.dropMenu__option
            }
            onClick={() => resetOption()}
          >
            Все
          </div>
        )}
      </div>
      <div className={styles.dropMenu__icon}></div>
    </div>
  );
};

export default DropMenu;
