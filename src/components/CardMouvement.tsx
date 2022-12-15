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

export const CardMouvement = ({ data }: Iproperty) => {
  const router = useRouter();

  const handleClick = (ev: any) => {
    ev.preventDefault();
    router.push(`/mouvements/${data.movId}`);
  };

  return (
    <Box
      marginX={8}
      marginY={4}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{ bg: '#F3EBDF' }}
      onClick={handleClick}
    >
      <Image src={data.imageUrl} alt="Image Alt" height="160px" width="320px" />

      <Box p="4">
        <Flex alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="gray">
            {data.level}
          </Badge>
        </Flex>

        <Flex mt="1" alignItems="center" justifyContent="space-between">
          <Box as="span" ml="1" color="gray.600" fontSize="md">
            {data.title}
          </Box>
          <Box as="span" ml="1" color="gray.600" fontSize="md">
            {data.person}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
