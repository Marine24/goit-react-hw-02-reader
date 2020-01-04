import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Publication.module.css';

const Publication = ({ title, text }) => (
  <div>
    <p className={Styles.title}>{title}</p>
    <p className={Styles.text}>{text}</p>
  </div>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Publication;
