import React, { useState } from 'react';
import styles from './Card.scss';

function Card() {
  const [translateCard, setTranslateCard] = useState(null);
  function handleClick() {
    setTranslateCard(!translateCard);
  }

  return (
    <div className={styles.card}>
      <div className={styles.title}>Тема карточки</div>
      <div className={styles.flex}>
        <div className={styles.cardWordWrapper}>
          <div className={styles.cardWord}>Карточка с переводом</div>
          {translateCard ? (
            <div>Перевод слова</div>
          ) : (
            <button onClick={handleClick}>Показать перевод</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
