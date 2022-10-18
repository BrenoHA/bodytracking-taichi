import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { HomePage } from '../src/components/HomePage';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bodytracking TaiChi</title>
        <meta name="description" content="IMT Bodytracking Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;
