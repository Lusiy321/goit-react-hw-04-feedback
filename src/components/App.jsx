import React, { useState } from 'react';
import { FeedbackOp } from './FeedbackOptions/Feedback';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Styles } from './Styles';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = () => {
    return Object.values(state).reduce((ac, item) => (ac += item));
  };

  const positiveFeedback = () => {
    const res = Math.round((state.good / totalFeedback()) * 100);
    return !Number.isNaN(res) ? res : 0;
  };

  const onFeedback = option => {
    setState(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const { good, neutral, bad } = state;
  const keys = Object.keys(state);

  return (
    <>
      <Styles />
      <Section title="Please leave feedback">
        <FeedbackOp options={keys} onLeaveFeedback={onFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedback()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}
