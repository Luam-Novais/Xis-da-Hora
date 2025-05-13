import React, { useContext} from 'react';
import { FaCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/components/modals/Messages.module.scss'


const Messages = ({status}) => {

  if (status.visible) {
    return (
      <div 
      className={`${styles.container}`} 
      style={{backgroundColor: status.state ? 'green': 'red'}}>
        {status.message}
        <i className={status.state ? styles.sucess : styles.error}>{status.state ? <FaCheck /> : <FaTimes />}</i>
      </div>
    );
  }
};

export default Messages;
