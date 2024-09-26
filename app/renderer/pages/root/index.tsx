import React from 'react';
import { useNavigate } from 'react-router';
import * as styles from './index.scss';
function Root() {
  const navigate = useNavigate();
  const items: { [key: string]: string } = {
    介绍: '/introduce',
    简历: '/resume',
    源码: '/source',
  };
  return (
    <div className={styles.root}>
      <div className={styles.action}>
        {Object.keys(items).map((key) => (
          <div key={key} className={styles.item} onClick={() => navigate(items[key])}>
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Root;
