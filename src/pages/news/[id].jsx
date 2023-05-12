import Head from 'src/components/layout/Head';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { fetchNews } from 'src/features/News/api/client';

const News = ({ news }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentNews = news.find((n) => n.id === id);

  return (
    <>
      <Head
        title={`株式会社Workup | ${currentNews.title}`}
        description={currentNews.description}
        url={`https://workup.co.jp/news/${currentNews.id}`}
      />
      <Header />
      <main>
        <h1>{currentNews.title}</h1>
        <div>{currentNews.body}</div>
        <div>
          {currentNews.image ? (
            <img src={currentNews.image.url} alt={currentNews.title} />
          ) : (
            <Image
              src="/noimage.jpg"
              alt="noimage"
              width={1920}
              height={900}
              layout="responsive"
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const news = await fetchNews();
  return {
    props: {
      news,
    },
  };
}

export async function getStaticPaths() {
  const news = await fetchNews();
  const paths = news.map((news) => `/news/${news.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default News;
