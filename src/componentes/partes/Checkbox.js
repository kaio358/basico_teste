import React, { useId, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./Checkbox.module.css";

function Checkbox({ label }) {
  const id = useId();
  const location = useLocation();
  const navigate = useNavigate();

  const [checkado, setCheckado] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoria = params.get('categoria');
    
    if (categoria) {
      const categorias = categoria.split(',');
      const checkbox = document.getElementById(id);
      if (checkbox) {
        checkbox.checked = categorias.includes(label);
      }
    }
  }, [location.search, id, label]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let categorias = params.get('categoria') ? params.get('categoria').split(',') : [];

    if (checkado) {
      if (!categorias.includes(label)) {
        categorias.push(label);
      }
    } else {
      categorias = categorias.filter(cat => cat !== label);
    }

    params.set('categoria', categorias.join(','));
    navigate(`/filtro?${params.toString()}`);
  }, [checkado, label, location.search, navigate]);

  return (
    <div className={styles.caixaCheck}>
      <label htmlFor={id} className={styles.fontesCheck}>{label}</label>
      <input
        type="checkbox"
        id={id}
        onChange={(e) => setCheckado(e.target.checked)}
      />
    </div>
  );
}

export default Checkbox;
