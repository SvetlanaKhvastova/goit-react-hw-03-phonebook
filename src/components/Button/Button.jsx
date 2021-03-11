import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ name, type, onClick }) => {
  return (
    <>
      <button type={type} className={s.button} onClick={onClick}>
        {name}
      </button>
    </>
  );
};
Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
