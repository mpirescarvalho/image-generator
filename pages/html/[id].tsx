import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import axios from 'axios';

import colors from '../../utils/colors';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('http://api.quotable.io/random');
  const { content, author } = res.data;

  const color = colors[Math.floor(Math.random() * colors.length)];

  return {
    props: {
      quote: {
        content,
        author,
      },
      color,
    },
    revalidate: 31536000,
  };
};

interface HomeProps {
  quote: {
    content: string;
    author: string;
  };
  color: {
    background: string;
    color: string;
  };
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Image generator</title>
      </Head>

      <div
        id="wrapper"
        style={{
          backgroundColor: props.color.background,
          color: props.color.color,
        }}
      >
        <div id="content">
          <p>{props.quote.content}</p>
          <span>- {props.quote.author}</span>
        </div>
      </div>
    </>
  );
}
