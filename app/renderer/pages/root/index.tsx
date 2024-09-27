import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as styles from './index.scss';
import { ROOT_ROUTER_ITEMS } from '@common/constants/router';
import { useSelector, useDispatch } from 'react-redux';
function Root() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalStore.appName);
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'globalStore/setStore',
        payload: {
          key: 'appName',
          values: 'resume-making-platform',
        },
      });
    }, 3000);
  }, []);
  useEffect(() => {
    console.log('appName:', appName);
  }, [appName]);
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
