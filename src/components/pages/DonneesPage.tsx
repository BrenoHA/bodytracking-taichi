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

export const DonneesPage = () => {
  return (
    <Box backgroundColor="#FFEDE6">
      {/* Base de Données */}

      <Flex id="Base de Données" flexDir={'column'} alignItems="center">
        <Text fontSize="4xl" as="b">
          Base de Données
        </Text>
        <Text fontSize="lg" align="center">
          Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
          texte employé dans la composition et la mise en page avant impression.
          Le Lorem Ipsum est le faux texte standard de imprimerie depuis les
          années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
          de texte pour réaliser un livre spécimen de polices de texte. Le Lorem
          Ipsum est simplement du faux texte employé dans la composition et la
          mise en page avant impression. Le Lorem Ipsum est simplement du faux
          texte employé dans la composition et la mise en page avant impression.
        </Text>
        <Button colorScheme="green">Base de Données</Button>
        <Text fontSize="lg" align="center">
          Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
          texte employé dans la composition et la mise en page avant impression.
          Le Lorem Ipsum est le faux texte standard de imprimerie depuis les
          années 1500.
        </Text>
      </Flex>
    </Box>
  );
};
