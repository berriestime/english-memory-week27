import React from 'react';
import styles from './AddNewItem.scss';

function AddNewItem() {
  return (
    <div className={styles.newItem}>
      <div>Добавить слово</div>
      <button className={styles.btn} name="+">
        +
      </button>
    </div>
  );
}

export default AddNewItem;
