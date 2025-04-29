import React from 'react';
import styles from '../../styles/components/common/Input.module.scss';

const Input = ({ label, type, name, id, className, onBlur,placeholder, ...props }) => {
  return (
    <div className={`${styles.containerInput} ${className}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} value={props.value} onChange={props.onChange} onBlur={onBlur} placeholder={placeholder}/>
      <p className={styles.error}>{props.error && props.error}</p>
    </div>
  );
};

export default React.memo(Input);
