import s from './FeedbackControl.module.css';

const FeedbackControl = ({ onLeaveFeedback }) => {
  return (
    <div className="control">
      <h1 className="control-title">Please leave feedback</h1>
      <ul className={s.controlList}>
        <li className={s.controlList__item}>
          <button
            id="good"
            className={s.controlList__button}
            type="button"
            onClick={onLeaveFeedback}
          >
            Good
          </button>
        </li>

        <li className={s.controlList__item}>
          <button
            id="neutral"
            className={s.controlList__button}
            type="button"
            onClick={onLeaveFeedback}
          >
            Neutral
          </button>
        </li>

        <li className={s.controlList__item}>
          <button
            id="bad"
            className={s.controlList__button}
            type="button"
            onClick={onLeaveFeedback}
          >
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
export default FeedbackControl;
