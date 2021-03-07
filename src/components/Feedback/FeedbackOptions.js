import React from 'react';
import styles from './Feedback.module.css';
import { v4 as uuidv4 } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <button
        key={uuidv4()}
        type="button"
        value={option}
        className={styles.button}
        onClick={element => {
          onLeaveFeedback(element);
        }}
      >
        {option}
      </button>
    );
  });
};
// (
//   <div className={styles.controls}>
//     <button type="button" onClick={onGood}>
//       Good
//     </button>
//     <button type="button" onClick={onNeutral}>
//       Neutral
//     </button>
//     <button type="button" onClick={onBad}>
//       Bad
//     </button>
//   </div>
// );

export default FeedbackOptions;
