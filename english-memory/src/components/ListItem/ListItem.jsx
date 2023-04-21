import React, { useState } from 'react';
import styles from './ListItem.scss';

function ListItem(props) {
  const [title, setTitle] = useState('Изменить');

  function handleClick() {
    if (title === 'Изменить') {
      setTitle('Сохранить');
    } else {
      setTitle('Изменить');
    }
  }

  //   {title === 'Изменить' ? (
  //     <span>{props.russian}</span>
  //   ) : (
  //     <input type="text" value={value} onChange={handleChange} />
  //   )}

  return (
    <div className={styles.tableRowT} key={props.id}>
      <div className={styles.tableCellT}>{props.id}</div>
      {title === 'Изменить' ? (
        <div className={styles.tableCellT}>{props.english}</div>
      ) : (
        <input
          type="text"
          value={props.english}
          className={styles.tableCellT}
        />
      )}
      {title === 'Изменить' ? (
        <div className={styles.tableCellT}>{props.transcription}</div>
      ) : (
        <input
          type="text"
          value={props.transcription}
          className={styles.tableCellT}
        />
      )}
      {title === 'Изменить' ? (
        <div className={styles.tableCellT}>{props.russian}</div>
      ) : (
        <input
          type="text"
          value={props.russian}
          className={styles.tableCellT}
        />
      )}
      {title === 'Изменить' ? (
        <div className={styles.tableCellT}>{props.tags}</div>
      ) : (
        <input type="text" value={props.tags} className={styles.tableCellT} />
      )}
      <div className={styles.tableCellT}>
        <button onClick={handleClick} className={styles.btn}>
          {title}
        </button>
        <button className={styles.btn}>Удалить</button>
      </div>
    </div>
  );
}

export default ListItem;
