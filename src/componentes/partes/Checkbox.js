import React, { useId } from 'react';
import styles from "./Checkbox.module.css";

function Checkbox({ label }) {
  const id = useId();
  return (
    <div className={styles.caixaCheck}>
        <label htmlFor={id} className={styles.fontesCheck}>{label}</label>
        <input type="checkbox" id={id} />
     
    </div>
  );
}

export default Checkbox;
