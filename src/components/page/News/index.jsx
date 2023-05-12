import styles from 'src/styles/Home.module.css';
import { useEffect } from 'react';
import Head from 'src/components/layout/Head';


const News = (props) => {
  return (
    <>
      <Head
        title={'株式会社 | News'}
        description={'News'}
        url={'https://hoge.co.jp/'}
      />
      <main className={styles.main}>
        <div className="lowMv">
          <div className="Contact">
            <h1 className="lowTitle">News</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
