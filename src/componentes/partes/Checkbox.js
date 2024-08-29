import React, { useId, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Checkbox.module.css";




function Checkbox({ label }) {
  const id = useId();

  // pega o parametro da url 
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria && categoria == label) {
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = true;
      }
    }
  }, [categoria]);
  return (
    <div className={styles.caixaCheck}>
        <label htmlFor={id} className={styles.fontesCheck}>{label}</label>
        <input type="checkbox" id={id} />
     
    </div>
  );
}

export default Checkbox;
