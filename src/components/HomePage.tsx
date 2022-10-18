import React from 'react';

import { Button, ButtonGroup, Text, Flex, Box, HStack } from '@chakra-ui/react';
import { CardMouvement } from './CardMouvement';

export const HomePage = () => {
  return (
    <div>
      {/*  */}
      <Box id="Body Tracking Tai Chi">
        <Text fontSize="5xl" as="b">
          Body Tracking Tai Chi
        </Text>
        <Flex boxSize={'50%'}>
          <Text fontSize="xl">
            Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de imprimerie
            depuis les années 1500, quand un imprimeur anonyme assembla ensemble
            des morceaux de texte pour réaliser un livre spécimen de polices de
            texte. Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression.
          </Text>
        </Flex>
      </Box>

      {/* Le Projet */}

      <Flex id="Le Projet" flexDir={'column'} alignItems="center">
        <Text fontSize="4xl" as="b">
          Le Projet
        </Text>
        <Flex>
          <Flex boxSize={'50%'}>
            <Text fontSize="lg" align="center">
              Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
              texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est le faux texte standard de
              imprimerie depuis les années 1500, quand un imprimeur anonyme
              assembla ensemble des morceaux de texte pour réaliser un livre
              spécimen de polices de texte. Le Lorem Ipsum est simplement du
              faux texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est simplement du faux texte employé
              dans la composition et la mise en page avant impression.
            </Text>
          </Flex>
          <Flex boxSize={'50%'}>
            <Text fontSize="lg" align="center">
              Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
              texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est le faux texte standard de
              imprimerie depuis les années 1500, quand un imprimeur anonyme
              assembla ensemble des morceaux de texte pour réaliser un livre
              spécimen de polices de texte. Le Lorem Ipsum est simplement du
              faux texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est simplement du faux texte employé
              dans la composition et la mise en page avant impression.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Mouvements */}

      <Flex id="Mouvements" flexDir={'column'} alignItems="center">
        <Text fontSize="4xl" as="b">
          Mouvements
        </Text>
        <Text fontSize="lg" as="b" align="center">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition
        </Text>
        <HStack spacing={10}>
          <CardMouvement />
          <CardMouvement />
          <CardMouvement />
        </HStack>
      </Flex>

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

      {/* L'équipe */}

      <Flex id="L'équipe" flexDir={'column'} alignItems="center">
        <Text fontSize="4xl" as="b">
          L&apos;équipe
        </Text>
      </Flex>
    </div>
  );
};
