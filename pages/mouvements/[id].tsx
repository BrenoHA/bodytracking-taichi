import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../../src/components/Header';

import { useRouter } from 'next/router';
import { Footer } from '../../src/components/Footer';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { IFrameYT } from '../../src/components/IFrameYT';
import { MouvementsPage } from '../../src/components/pages/MouvementsPage';
import { ChevronLeftIcon } from '@chakra-ui/icons';

const Mouvements: NextPage = () => {
  const router = useRouter();
  const { id } = router.query; //1

  const handleBackClick = (ev: any) => {
    ev.preventDefault();
    router.back();
  };

  return (
    <div>
      <Head>
        <title>Bodytracking TaiChi - Mouvements</title>
        <meta name="description" content="IMT Bodytracking Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box backgroundColor="#ffede6" padding={10}>
        <Flex justifyContent="start" alignItems="center">
          <IconButton
            colorScheme="blackAlpha"
            aria-label="back"
            size="md"
            icon={<ChevronLeftIcon />}
            onClick={handleBackClick}
          />
          <Text fontSize="3xl" fontWeight="bold" marginLeft={10}>
            Mouvement X
          </Text>
        </Flex>
        <Flex>
          <Text fontSize="xl" fontWeight="bold">
            Avancé
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            Prénom NOM
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <IFrameYT embedId="rokGy0huYEA" />
        </Flex>
      </Box>
      <MouvementsPage />

      <Footer />
    </div>
  );
};

export default Mouvements;
