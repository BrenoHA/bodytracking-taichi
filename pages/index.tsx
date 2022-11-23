import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { HomePage } from '../src/components/pages/HomePage';
import Link from 'next/link';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bodytracking TaiChi</title>
        <meta name="description" content="IMT Bodytracking Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
