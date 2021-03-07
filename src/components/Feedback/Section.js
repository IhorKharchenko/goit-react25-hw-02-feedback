import React from 'react';
import styles from './Feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={styles.section__title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
