import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Progress.module.css';

const Progress = ({ currentPage, totalPages }) => (
  <span className={Styles.progress}>
    {currentPage}/{totalPages}
  </span>
);

Progress.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Progress;
