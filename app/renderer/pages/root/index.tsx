import React from 'react';
import { useNavigate } from 'react-router';
import * as styles from './index.scss';
import { ROOT_ROUTER_ITEMS } from '@common/constants/router';
function Root() {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <div className={styles.action}>
        {ROOT_ROUTER_ITEMS.map((item, index) => (
          <div key={index} onClick={() => navigate(item.path)} className={styles.item}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Root;
