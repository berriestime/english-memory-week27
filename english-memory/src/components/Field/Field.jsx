import React from 'react';
import Card from '../Card/Card';
import List from '../List/List';
import AddNewItem from '../AddNewItem/AddNewItem';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Field.scss';

function Field() {
  return (
    <div className={styles.container}>
      <Header />
      <Card />
      <List />
      <AddNewItem />
      <Footer />
    </div>
  );
}

export default Field;
