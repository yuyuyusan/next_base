import React from 'react';
import Head from 'next/head';

const MyHead = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url} />
      <meta property="og:image" content={"/favicon.png"} />
      <meta property="og:site_name" content={props.title} />
      <meta name="keywords" content={props.keyword} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="twitter:card" content="Summary Card" />
      <meta name="twitter:site" content="@Tsue_engineer" />
      <meta name="twitter:url" content={"https://tsue-gatsby.web.app"} />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={"/favicon.png"} />
      <link rel="canonical" href={props.url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href={"/favicon.png"} />
    </Head>
  );
};

export default MyHead;