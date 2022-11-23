import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      as="footer"
      position="relative"
      zIndex="dropdown"
      width="100%"
      bgColor="#806C53"
      aria-label="Footer"
    >
      <Flex alignItems="center" width="100%" height="12" paddingX="10">
        <Box>
          <Text color="white">© IMT Atlantique</Text>
        </Box>
      </Flex>
    </Box>
  );
};
