import s from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="control">
      <ul className={s.controlList}>
        {options.map(option => (
          <li key={option} className={s.controlList__item}>
            <button
              id={option}
              className={s.controlList__button}
              type="button"
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FeedbackOptions;
