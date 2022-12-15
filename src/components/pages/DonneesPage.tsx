import React from 'react';

import {
  Button,
  ButtonGroup,
  Text,
  Flex,
  Box,
  Image,
  Badge,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const DonneesPage = () => {
  const router = useRouter();

  const handleClick = (ev: any) => {
    ev.preventDefault();
    router.push('https://github.com/perroquent/Taichi');
  };
  return (
    <Box backgroundColor="#FFEDE6" height="100%">
      {/* Base de Données */}

      <Flex
        id="Base de Données"
        flexDir={'column'}
        alignItems="center"
        height="100vh"
      >
        <Text fontSize="4xl" fontWeight="bold" marginTop={6}>
          Base de Données
        </Text>
        <Box width="80rem" marginY={10}>
          {/* <Text fontSize="lg" align="center">
            Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de imprimerie
            depuis les années 1500, quand un imprimeur anonyme assembla ensemble
            des morceaux de texte pour réaliser un livre spécimen de polices de
            texte. Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression.
          </Text> */}
        </Box>
        <Button colorScheme="green" onClick={handleClick}>
          Base de Données
        </Button>
        <Box width="80rem" marginY={8}>
          {/* <Text fontSize="lg" align="center">
            Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de imprimerie
            depuis les années 1500.
          </Text> */}
        </Box>
      </Flex>
    </Box>
  );
};
