import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Controls.module.css';

const Controls = ({
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => (
  <>
    <button
      className={Styles.controls}
      name="next"
      type="button"
      onClick={onNextClick}
      disabled={nextBtnDisabled}
    >
      Вперед
    </button>
    <button
      className={Styles.controls}
      name="prev"
      type="button"
      onClick={onPrevClick}
      disabled={prevBtnDisabled}
    >
      Назад
    </button>
  </>
);

Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
