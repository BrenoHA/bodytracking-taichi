import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../../src/components/Header';

import { useRouter } from 'next/router';
import { Footer } from '../../src/components/Footer';

const Mouvements: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Bodytracking TaiChi - Mouvements</title>
        <meta name="description" content="IMT Bodytracking Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{id}</div>
      <Footer />
    </div>
  );
};

export default Mouvements;
