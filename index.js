import React from 'react';
import {
  string,
  bool,
  arrayOf,
  node,
  func,
  oneOf,
  oneOfType,
} from 'prop-types';
import styles from './StyledButton.module.css';

const StyledButton = ({ children, size, type, colorScheme, ...otherProps }) => {
  const assignClassName = () => {
    const style = [styles.button];
    if (colorScheme) {
      style.push(styles[colorScheme]);
    }
    if (size) {
      style.push(styles[size]);
    }
    return style.join(' ');
  };

  const test = false;
  return (
    <button
      className={assignClassName(colorScheme, size)}
      type={test ? 'submit' : 'button'} // <================ why doesn't this work?
      {...otherProps}
    >
      {children}
    </button>
  );
};

StyledButton.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  onClick: func.isRequired,
  size: string.isRequired,
  type: bool.isRequired,
  colorScheme: oneOf(['default', 'bright', 'vivid']).isRequired,
};

export default StyledButton;
