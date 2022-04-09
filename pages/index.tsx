import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gamer Zone</title>
        <meta name="description" content="Game news blog!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Gamer Zone!</h1>
    </div>
  );
};

export default Home;
