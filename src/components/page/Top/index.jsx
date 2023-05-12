import styles from './Top.module.css';
import Head from 'src/components/layout/Head';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import NewsList from 'src/features/News/components/NewsList';
import WorksList from 'src/features/Works/components/WorksList';
import { Raleway } from 'next/font/google';
import Button from 'src/components/ui/Button';

const raleway = Raleway({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const TopPage = (props) => {
  console.log(props);
  return (
    <>
      <Head
        title={'株式会社 | Top'}
        description={'株式会社のトップページです。'}
        url={'https://hoge.co.jp/'}
      />
      <Header />
      <main className={styles.topMain}>
        <section className={styles.topMv}>
          <div className={styles.mv__container}>
            <h1 className={styles.mv__title}>
              <span className={styles.mv__titleTop}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                nihil soluta, exercitationem provident, <br />
                suscipit at in ullam ab quo natus quaerat placeat iusto vel
                officia dignissimos enim veniam earum quae?
              </span>
              <span className={styles.mv__titleCenter}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className={styles.mv__titleBottom}>copy Co., Ltd.</span>
            </h1>
          </div>
        </section>

        <section className={styles.topNews}>
          <div className={styles.news__container}>
            <NewsList {...props} />
          </div>
        </section>

        <section className={styles.topAbout}>
          <div className={styles.about__container}>
            <h2 className={raleway.className}>
              <span className={styles.en}>About us</span>
              <span className={styles.jp}>会社について</span>
            </h2>
            <p className={styles.about__text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ad
              hic iusto doloribus reprehenderit rem praesentium aut ipsam
              tenetur quibusdam dolorem nam a earum quia ipsum est, nesciunt
              veritatis facere.
            </p>
            <Button text="more" link="/works/" />
          </div>
        </section>

        <section className={styles.topService}>
          <div className={styles.service__container}></div>
        </section>

        <section className={styles.topWorks}>
          <div className={styles.Works__container}>
            <WorksList {...props} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TopPage;
