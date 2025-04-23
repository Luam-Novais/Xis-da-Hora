import React, { useState } from 'react';
import styles from '../../styles/components/common/PasswordInput.module.scss';
import { LuEye, LuEyeClosed } from 'react-icons/lu';

const PasswordInput = ({ label, name, id, className, onBlur, ...props }) => {
  const [showPass, setShowPass] = useState(false);

  function handleShowPass() {
    setShowPass(!showPass);
  }
  return (
    <div className={`${styles.containerInput} ${className}`}>
      <label htmlFor={id}>{label}</label>
      <span>
        <input type={showPass ? 'text' : 'password'} name={name} id={id} value={props.value} onChange={props.onChange} onBlur={onBlur} />
        <button type="button" onClick={handleShowPass}>
          <i>{showPass ? <LuEye /> : <LuEyeClosed />}</i>
        </button>
      </span>
      <p className={styles.error}>{props.error && props.error}</p>
    </div>
  );
};

export default PasswordInput;
