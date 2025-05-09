import React, { useState } from 'react';
import styles from '../../styles/components/common/PasswordInput.module.scss';
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = ({ label, name, id, className, onBlur, ...props }) => {
  const [showPass, setShowPass] = useState(false);

  function handleShowPass() {
    setShowPass(!showPass);
  }
  return (
    <div className={`${styles.containerInput} ${className}`}>
      <label htmlFor={id}>{label}</label>
      <span>
        <input 
          type={showPass ? 'text' : 'password'} 
          name={name} id={id} 
          value={props.value} 
          onChange={props.onChange} 
          onBlur={onBlur}
          autoComplete='current-password'/>
        <button type="button" onClick={handleShowPass}>
          <i>{showPass ? <IoEye /> : <IoEyeOff />}</i>
        </button>
      </span>
      <p className={styles.error}>{props.error && props.error}</p>
    </div>
  );
};

export default PasswordInput;
