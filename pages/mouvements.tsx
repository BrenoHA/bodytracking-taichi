import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { MouvementsPage } from '../src/components/pages/MouvementsPage';

const Mouvements: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bodytracking TaiChi - Mouvements</title>
        <meta name="description" content="IMT Bodytracking Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MouvementsPage />
    </div>
  );
};

export default Mouvements;
