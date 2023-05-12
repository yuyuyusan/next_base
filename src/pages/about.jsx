import Head from 'next/head';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import AboutPage from 'src/components/page/About';

const About = (props) => {
  const {
    doubleCount,
    isShow,
    handleClick,
    handleShow,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;
  return (
    <div>
      <Head>
        <title>about Next App</title>
      </Head>
      <Header />
      <AboutPage class="index" page="about" />
      <Footer />
    </div>
  );
}
export default About;
