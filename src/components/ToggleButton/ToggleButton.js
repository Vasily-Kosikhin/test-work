import React, { useState } from 'react';
import styles from './ToggleButton.module.scss';

const ToggleButton = (props) => {
  const [selected, setSelected] = useState(false);
  const isSelected = (flag) => {
    if (flag) {
      return styles.toggle__option_active;
    }
    return styles.toggle__option;
  };
  return (
    <div className={styles.toggle}>
      <div
        className={isSelected(!selected)}
        onClick={() => setSelected((p) => !p)}
      >
        <span className={styles.toggle__option_text}>{props.first}</span>
      </div>
      <div
        className={isSelected(selected)}
        onClick={() => setSelected((p) => !p)}
      >
        <span className={styles.toggle__option_text}>{props.second}</span>
      </div>
    </div>
  );
};

export default ToggleButton;
