import React from 'react';
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
import { CardMouvementNiveau } from '../../src/components/CardMouvementNiveau';
import { properties } from '../../src/data';
import { Iproperty } from '../../src/interface/Iproperty';

const Mouvements: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = React.useState<any>({});
  const [data2, setData2] = React.useState<any>(properties[6].data);
  const [data3, setData3] = React.useState<any>(properties[4].data);

  React.useEffect(() => {
    properties.forEach((property) => {
      if (property.data.movId == Number(id)) {
        setData(property.data);
      }
    });
  }, [data, id]);

  const handleBackClick = (ev: any) => {
    ev.preventDefault();
    router.push('/mouvements');
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
          <Text fontSize="3xl" fontWeight="bold" marginLeft="16">
            {data.title}
          </Text>
        </Flex>
        <Flex justifyContent="space-around" marginX="16" marginY="2">
          <Text fontSize="2xl" fontWeight="bold">
            {data.level}
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {data.person}
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <IFrameYT embedId={data.embedId} />
        </Flex>
        <Flex justifyContent="center">
          <Text fontWeight="bold" width="70%" align="center" marginTop="6">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l&apos;imprimerie depuis les années 1500,
            quand un imprimeur anonyme assembla ensemble des morceaux de texte
            pour réaliser un livre spécimen de polices de texte.
          </Text>
        </Flex>
        <Flex justifyContent="space-around" marginX="32" marginTop="4">
          <CardMouvementNiveau data={data2} />
          <CardMouvementNiveau data={data3} />
        </Flex>
      </Box>
      <MouvementsPage />

      <Footer />
    </div>
  );
};

export default Mouvements;
