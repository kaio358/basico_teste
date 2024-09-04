import React, { useId, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from "./Checkbox.module.css";



function Checkbox({ label }) {
  const id = useId();

  // pega o parametro da url 
  const { categoria } = useParams();

  useEffect(() => {

    
    if (categoria ) {
      let verifica 
      const checkbox = document.getElementById(id);
      if(checkbox){
        if(categoria == label){   
            verifica= true;
        }else{
            verifica = false;
        }
        checkbox.checked = verifica
      }
      
    }
  }, [categoria]);

  const navigate = useNavigate();

  const [checkado, setCheckado] = useState();

 

  useEffect(()=>{
    if(checkado){
      if(categoria){
        console.log('ola');
        
        navigate(`/filtro?categoria=${categoria},${label}`)
      }else{
        navigate(`/filtro?categoria=${label}`)
      }
      
    }
  },[checkado])

 
  return (
    <div className={styles.caixaCheck}>
        <label htmlFor={id} className={styles.fontesCheck}>{label}</label>
        <input type="checkbox" id={id} onChange={(e)=> setCheckado(e.target.checked)} />
        {/* <input type="checkbox" id={id}  /> */}
     
    </div>
  );
}

export default Checkbox;
