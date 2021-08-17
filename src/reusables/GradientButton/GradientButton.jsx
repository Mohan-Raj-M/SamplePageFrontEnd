import React from "react";
import cx from "classnames";

import styles from "./GradientButton.module.css";

function GradientButton({
  onClick,
  style,
  children,
  title,
  variant = "Gradient",
  color = null,
}) {
  return (
    <button
      className={
        variant === "Outline"
          ? cx(styles.button, styles.outline)
          : styles.button
      }
      style={
        variant === "Outline"
          ? { ...style, borderColor: color, color: color }
          : style
      }
      onClick={onClick}
    >
      {title ? title : children}
    </button>
  );
}

export default GradientButton;
