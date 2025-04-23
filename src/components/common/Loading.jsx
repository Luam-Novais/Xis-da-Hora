import React from 'react';
import styles from '../../styles/components/common/Loading.module.scss'
const Loading = () => {
  return (
    <svg className={styles.loading} viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
};

export default Loading;
