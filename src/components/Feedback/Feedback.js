import React, { Component } from 'react';
import styles from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };
  options = ['good', 'neutral', 'bad'];
  leaveFeedback = element => {
    const { value } = element.currentTarget;
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  // handleGood = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };
  // handleNeutral = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };
  // handleBad = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   this.countTotalFeedback();
  //   this.countPositiveFeedbackPercentage();
  // };
  countTotalFeedback = () => {
    this.setState(prevState => ({ total: prevState.total + 1 }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round((prevState.good / prevState.total) * 100),
    }));
  };
  render() {
    return (
      <div className={styles.feedback}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.leaveFeedback}
            // onGood={this.handleGood}
            // onNeutral={this.handleNeutral}
            // onBad={this.handleBad}
          />
        </Section>
        {this.state.total !== 0 ? (
          <Section title="Statistics">
            <Statistics
              isGood={this.state.good}
              isNeutral={this.state.neutral}
              isBad={this.state.bad}
              isTotal={this.state.total}
              isPositive={this.state.positivePercentage}
            />
          </Section>
        ) : (
          <Section title="No feedback given" />
        )}
      </div>
    );
  }
}

export default Feedback;
