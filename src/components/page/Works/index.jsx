import styles from './Works.module.css';
import Head from 'src/components/layout/Head';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import WorksList from 'src/features/Works/components/WorksList';
import { useState, useEffect } from 'react';
import WorksSearch from 'src/features/Works/components/WorksSearch';

const WorksPage = (props) => {
  const [searchText, setSearchText] = useState('');
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    setSearchText('');
  }, [props.works]);

  const filteredWorks = props.works.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchText.toLowerCase())
  );

  const visibleWorks = filteredWorks.slice(0, displayCount);

  return (
    <>
      <Head
        title={'株式会社 | Works'}
        description={'株式会社の実績ページです。'}
        url={'https://hoge.co.jp/works'}
      />
      <Header />
      <main className={styles.worksMain}>
        <div className={styles.container}>
          <WorksSearch
            searchText={searchText}
            setSearchText={setSearchText}
            filteredWorks={filteredWorks}
          />
          <WorksList works={visibleWorks} />
          {displayCount < filteredWorks.length && (
            <button
              className={styles.loadMoreButton}
              onClick={() => setDisplayCount(displayCount + 3)}
            >
              もっと見る
            </button>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WorksPage;
