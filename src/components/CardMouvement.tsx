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

export const CardMouvement = () => {
  const router = useRouter();

  const property = {
    imageUrl: 'https://i.ibb.co/7SQ0XHn/image-2.png',
    imageAlt: 'Image Alternative',
    movId: 1,
    title: 'Le Lorem Ipsum est simplement du faux texte',
  };

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
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="4">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
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
