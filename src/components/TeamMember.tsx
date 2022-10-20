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

export const TeamMember = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Text fontSize="lg" marginTop="2">
        Cleo CASABONNE
      </Text>
      <Text fontWeight="semibold">Chef de projet</Text>
    </Flex>
  );
};
