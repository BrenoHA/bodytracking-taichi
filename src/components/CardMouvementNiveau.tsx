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
import { useRouter } from 'next/router';
import { property } from '../data';

export const CardMouvementNiveau = () => {
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
      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="gray">
            {property.level}
          </Badge>
        </Box>
      </Box>
      <Image src={property.imageUrl} alt="Image Alt" />
    </Box>
  );
};
