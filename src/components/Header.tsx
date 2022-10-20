import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export const Header = () => {
  return (
    <Box
      as="header"
      position="relative"
      zIndex="dropdown"
      width="100%"
      bgColor="#806C53"
      aria-label="Header"
    >
      <Flex as="nav" alignItems="center" width="100%" height="12" paddingX="10">
        <Box cursor="pointer">
          <Link href="/">
            <Text fontWeight="semibold" color="white">
              Le Projet
            </Text>
          </Link>
        </Box>
        <Box cursor="pointer" marginLeft="14">
          <Link href="/mouvements">
            <Text fontWeight="semibold" color="white">
              Mouvements
            </Text>
          </Link>
        </Box>
        <Box cursor="pointer" marginLeft="14">
          <Link href="/donnees">
            <Text fontWeight="semibold" color="white">
              Base de Données
            </Text>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
