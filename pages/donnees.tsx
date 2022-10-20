import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { DonneesPage } from '../src/components/pages/DonneesPage';
import { Header } from '../src/components/Header';

const Donnees: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bodytracking TaiChi - Base de Données</title>
        <meta name="description" content="IMT Bodytracking Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DonneesPage />
    </div>
  );
};

export default Donnees;
