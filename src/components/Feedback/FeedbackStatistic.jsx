const FeedbackStatistic = ({ good, neutral, bad, total, positive }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>

        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>

        <li>
          <p>Positive feedback: {positive}%</p>
        </li>
      </ul>
    </div>
  );
};
export default FeedbackStatistic;
