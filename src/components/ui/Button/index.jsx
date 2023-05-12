import React from 'react';
import styles from './Button.module.css';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

function Button(props) {
  return (
    <div className={styles.button}>
      <a className={roboto.className} href={props.link}>{props.text}</a>
    </div>
  );
}

export default Button;
