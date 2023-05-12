import axios from 'axios';

export async function fetchNews() {
  const { data } = await axios.get(
    `https://hoge.microcms.io/api/v1/news`,
    {
      headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
    }
  );

  return data.contents;
}