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
    <Box backgroundColor="#FFF9F1">
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
    </Box>
  );
};
