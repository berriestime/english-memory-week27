import React from 'react';
import styles from './List.scss';
import Button from '../Button/Button';

function List() {
  const arr = [
    {
      id: '13367',
      english: 'mama',
      transcription: '[mama]',
      russian: 'мама',
      tags: 'семья',
      tags_json: '["u0441u0435u043cu044cu044f"]',
    },
    {
      id: '13368',
      english: 'table',
      transcription: '[table]',
      russian: 'стол',
      tags: 'мебель',
      tags_json: '["u043cu0435u0431u0435u043bu044c"]',
    },
    {
      id: '13369',
      english: 'dog',
      transcription: '[dog]',
      russian: 'собака',
      tags: 'животные',
      tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
    },
    {
      id: '13370',
      english: 'stop',
      transcription: 'stv:p',
      russian: 'остановка',
      tags: 'объекты',
      tags_json: '["u043eu0431u044au0435u043au0442u044b"]',
    },
    {
      id: '13371',
      english: 'orange',
      transcription: '[ˈɔːrɪndʒ]',
      russian: 'апельсин',
      tags: 'фрукты',
      tags_json: '["u0444u0440u0443u043au0442u044b"]',
    },
    {
      id: '13372',
      english: 'cat',
      transcription: '[cat]',
      russian: 'кошка',
      tags: 'животные',
      tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
    },
    {
      id: '13373',
      english: 'shelf',
      transcription: ' [ʃelf]',
      russian: 'полка',
      tags: 'мебель',
      tags_json: '["u043cu0435u0431u0435u043bu044c"]',
    },
  ];

  return (
    <div>
      <div className={styles.title}>Список всех существующих слов:</div>
      <div className={styles.gridContainer}>
        <div className={styles.header}>Номер</div>
        <div className={styles.header}>Название</div>
        <div className={styles.header}>Транскрипция</div>
        <div className={styles.header}>Перевод</div>
        <div className={styles.header}>Тема</div>
        <div className={styles.header}>Другое</div>

        {arr.map(item => (
          <React.Fragment className={styles.tableRow} key={item.id}>
            <div className={styles.item}>{item.id}</div>
            <div className={styles.item}>{item.english}</div>
            <div className={styles.item}>{item.transcription}</div>
            <div className={styles.item}>{item.russian}</div>
            <div className={styles.item}>{item.tags}</div>
            <div className={styles.item}>
              <Button name="Сохранить"></Button>
              <Button name="Изменить"></Button>
              <Button name="Удалить"></Button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default List;
