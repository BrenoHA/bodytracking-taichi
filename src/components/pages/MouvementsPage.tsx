import React from 'react';

import {
  Button,
  ButtonGroup,
  Text,
  Flex,
  Box,
  Image,
  Badge,
  HStack,
} from '@chakra-ui/react';

import { CardMouvement } from '../CardMouvement';

export const MouvementsPage = () => {
  return (
    <Box backgroundColor="#FFF9F1" height="100%">
      {/* Mouvements */}

      <Flex id="Mouvements" flexDir={'column'} alignItems="center">
        <Text fontSize="4xl" fontWeight="bold" marginTop={6}>
          Mouvements
        </Text>
        <Box marginY={4} width="60rem">
          <Text fontSize="md" fontWeight="bold" align="center">
            Pour chaque mouvement, vous pouvez choisir le niveau avec lequel il
            est exécuté : Débutant, Intermédiaire, Avancé. Vous trouverez des
            conseils et indications pour réaliser au mieux les mouvements
            proposés.
          </Text>
        </Box>
        <HStack spacing={10} marginBottom={6}>
          <CardMouvement />
          <CardMouvement />
          <CardMouvement />
        </HStack>
        <HStack spacing={10} marginBottom={6}>
          <CardMouvement />
          <CardMouvement />
          <CardMouvement />
        </HStack>
        <HStack spacing={10} marginBottom={6}>
          <CardMouvement />
          <CardMouvement />
          <CardMouvement />
        </HStack>
      </Flex>
    </Box>
  );
};
