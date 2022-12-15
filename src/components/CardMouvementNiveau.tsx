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
import { Iproperty } from '../interface/Iproperty';

export const CardMouvementNiveau = ({ data }: Iproperty) => {
  const router = useRouter();

  const handleClick = (ev: any) => {
    ev.preventDefault();
    router.push(`/mouvements/${data.movId}`);
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
            {data.level}
          </Badge>
        </Box>
      </Box>
      <Image src={data.imageUrl} alt="Image Alt" height="200px" width="400px" />
    </Box>
  );
};
