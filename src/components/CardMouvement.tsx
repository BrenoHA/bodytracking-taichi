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

export const CardMouvement = () => {
  const property = {
    imageUrl: 'https://i.ibb.co/7SQ0XHn/image-2.png',
    imageAlt: 'Image Alternative',
    title:
      'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Avancé
          </Badge>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.title}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
