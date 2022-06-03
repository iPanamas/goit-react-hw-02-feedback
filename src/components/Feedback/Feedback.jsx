import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackControl from './FeedbackControl';
import FeedbackStatistic from './FeedbackStatistic';

class Feedback extends Component {
  // static propTypes = {
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handleLeaveFeedback = event => {
    const { id } = event.target;
    this.setState(prevState => ({
      [id]: prevState[id] + 1,
    }));
  };

  countTotalFeedback = () => {};

  render() {
    const { good, neutral, bad, total, positive } = this.state;
    return (
      <>
        <FeedbackControl onLeaveFeedback={this.handleLeaveFeedback} />

        <FeedbackStatistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      </>
    );
  }
}
export default Feedback;
