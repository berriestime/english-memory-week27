import React from 'react';
import styles from './Card.scss';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>Тема карточки</div>
      <div className={styles.flex}>
        <div className={styles.cardWordWrapper}>
          <div className={styles.cardWord}>Карточка с переводом</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
