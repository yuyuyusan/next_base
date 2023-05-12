import Head from 'src/components/layout/Head';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { fetchWorks } from 'src/features/Works/api/client';

const Works = ({ works }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentWorks = works.find((n) => n.id === id);

  return (
    <>
      <Head
        title={`株式会社Workup | ${currentWorks.title}`}
        description={currentWorks.description}
        url={`https://workup.co.jp/works/${currentWorks.id}`}
      />
      <Header />
      <main>
        <h1>{currentWorks.title}</h1>
        <div>{currentWorks.body}</div>
        <div>
          {currentWorks.image ? (
            <img src={currentWorks.image.url} alt={currentWorks.title} />
          ) : (
            <Image
              src="/noimage.jpg"
              alt="noimage"
              width={1920}
              height={900}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }) {
  const works = await fetchWorks();
  return {
    props: {
      works,
    },
  };
}

export async function getStaticPaths() {
  const works = await fetchWorks();
  const paths = works.map((works) => `/works/${works.id}`);

  return {
    paths,
    fallback: false,
  };
}

export default Works;
