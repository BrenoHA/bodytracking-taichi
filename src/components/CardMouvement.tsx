import React from 'react';

import {
  Button,
  ButtonGroup,
  Text,
  Flex,
  Box,
  Image,
  Badge,
  background,
} from '@chakra-ui/react';
import { property } from '../data';
import { useRouter } from 'next/router';

export const CardMouvement = () => {
  const router = useRouter();

  const handleClick = (ev: any) => {
    ev.preventDefault();
    router.push(`/mouvements/${property.movId}`);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{ bg: '#F3EBDF' }}
      onClick={handleClick}
    >
      <Image src={property.imageUrl} alt="Image Alt" />

      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="gray">
            Avancé
          </Badge>
        </Box>

        <Box display="flex" mt="1" alignItems="center">
          <Box as="span" ml="1" color="gray.600" fontSize="md">
            {property.title}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
