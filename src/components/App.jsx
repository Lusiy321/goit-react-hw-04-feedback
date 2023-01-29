import { Component } from 'react';
import { FeedbackOp } from './FeedbackOptions/Feedback';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Styles } from './Styles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((ac, item) => (ac += item));
  };

  positiveFeedback = () => {
    const res = Math.round((this.state.good / this.totalFeedback()) * 100);
    return !Number.isNaN(res) ? res : 0;
  };

  onFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);
    const total = this.totalFeedback();
    const positivePercentage = this.positiveFeedback();

    return (
      <>
        <Styles />
        <Section title="Please leave feedback">
          <FeedbackOp options={keys} onLeaveFeedback={this.onFeedback} />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
//test
