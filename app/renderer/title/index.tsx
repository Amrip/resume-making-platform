import React from 'react';
import * as styles from './index.scss';
interface ITitileProps {
  text: string;
  styles: React.CSSProperties;
}

function Title(props: ITitileProps) {
  return (
    <div style={props.styles} className={styles.title}>
      <div className={styles.divd}>TITLE:</div>
      {props.text}
      <p>This is a paragraph.</p>
    </div>
  );
}

export default Title;
