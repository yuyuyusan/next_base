import WorksPage from 'src/components/page/Works';
import axios from 'axios';

const Works = (props) => {
  return (
    <>
      <WorksPage {...props}/>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://workup.microcms.io/api/v1/works?limit=100`,
    {
      headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
    }
  );

  return {
    props: {
      works: data.contents,
      revalidate: 60 * 60,
    },
  };
};
export default Works;
