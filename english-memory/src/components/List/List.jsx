import React from 'react';
import styles from './List.scss';
import ListItem from '../ListItem/ListItem';

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
      <div>
        <div className={styles.tableRowH}>
          <div className={styles.tableCellH}>Номер</div>
          <div className={styles.tableCellH}>Название</div>
          <div className={styles.tableCellH}>Транскрипция</div>
          <div className={styles.tableCellH}>Перевод</div>
          <div className={styles.tableCellH}>Тема</div>
          <div className={styles.tableCellH}></div>
        </div>
        {arr.map(item => (
          <div key={item.id}>
            <ListItem
              id={item.id}
              english={item.english}
              transcription={item.transcription}
              russian={item.russian}
              tags={item.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
