import React, { useState } from 'react';
import styles from '../../styles/components/common/LazyImage.module.scss';
import Loading from './Loading';

const LazyImage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.container} style={{filter : !loaded ? 'blur(5px)' : 'none'}}> 
      {!loaded && (
        <span className={styles.skeleton} style={{display: loaded ? 'none' : 'block'}}>
        </span>
      )}
      <img src={src} alt="" onLoad={() => setLoaded(true)} />
    </div>
  );
};

export default LazyImage;
