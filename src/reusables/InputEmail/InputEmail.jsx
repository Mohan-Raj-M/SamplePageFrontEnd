import React from 'react';
import { Form } from 'react-bootstrap';
import cx from 'classnames';
import styles from './InputEmail.module.css';

function InputEmail({ type, placeholder, onChange, style }) {
  return (
    <input
      type={type}
      style={style}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    />
  );
}

export default InputEmail;
