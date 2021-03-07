import React from 'react';
import styles from './Feedback.module.css';
import { v4 as uuidv4 } from 'uuid';

const Statistics = ({ isGood, isNeutral, isBad, isTotal, isPositive }) => (
  <ul className={styles.statistics}>
    <li key={uuidv4()} className={styles.statistics__item}>
      Good: {isGood}
    </li>
    <li key={uuidv4()} className={styles.statistics__item}>
      Neutral: {isNeutral}
    </li>
    <li key={uuidv4()} className={styles.statistics__item}>
      Bad: {isBad}
    </li>
    <li key={uuidv4()} className={styles.statistics__item}>
      Total: {isTotal}
    </li>
    <li key={uuidv4()} className={styles.statistics__item}>
      Positive feedback: {isPositive}%
    </li>
  </ul>
);

export default Statistics;
