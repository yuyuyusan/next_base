import styles from 'src/styles/Home.module.css';
import { useEffect } from 'react';
import Head from 'src/components/layout/Head';

const About = (props) => {
  return (
    <>
      <Head
        title={'株式会社 | About'}
        description={'Aboutです。'}
        url={'https://hoge.co.jp/'}
      />
      <main className={styles.main}>
        <div className="lowMv">
          <div className="about">
            <h1 className="lowTitle">AboutPage</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
