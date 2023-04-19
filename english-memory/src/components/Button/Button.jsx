import React from 'react';
import styles from './Button.scss';

function Button(props) {
  return <button className={styles.button}>{props.name}</button>;
}

export default Button;
