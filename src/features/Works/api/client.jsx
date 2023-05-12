import axios from 'axios';

export async function fetchWorks() {
  const { data } = await axios.get(
    `https://hoge.microcms.io/api/v1/works`,
    {
      headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY },
    }
  );

  return data.contents;
}