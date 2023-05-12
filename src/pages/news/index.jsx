import Head from 'next/head';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import NewsPage from 'src/components/page/News';

const News = (props) => {
  return (
    <div>
      <Head>
        <title>News Next App</title>
      </Head>
      <Header />
      <NewsPage page="contact" />
      <Footer />
    </div>
  );
}
export default News;
