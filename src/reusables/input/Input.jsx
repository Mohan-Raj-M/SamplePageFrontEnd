import React from "react";
import { Form } from "react-bootstrap";

import styles from "./Input.module.css";

function Input({ type, placeholder, onChange, style }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
      style={style}
    />
  );
}

export default Input;
