import TopPage from 'src/components/page/Top';
import axios from 'axios';

const Top = (props) => {
  return (
    <>
      <TopPage {...props}/>
    </>
  );
};

// export async function getStaticProps() {
//   const [newsData, worksData] = await Promise.all([
//     axios.get(
//       `https://hoge.microcms.io/api/v1/news?limit=3`,
//       {
//         headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
//       }
//     ),
//     axios.get(
//       `https://hoge.microcms.io/api/v1/works?limit=3`,
//       {
//         headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
//       }
//     )
//   ]);

//   return {
//     props: {
//       news: newsData.data.contents,
//       works: worksData.data.contents
//     },
//   };
// };


export default Top;
