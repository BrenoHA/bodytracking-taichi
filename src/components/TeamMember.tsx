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

type TeamMemberProps = {
  name: string;
  office: string;
};

export const TeamMember = ({ name, office }: TeamMemberProps) => {
  var fullName = name.split(' ');

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
        {fullName[0]}
      </Text>
      <Text fontSize="lg" marginTop="-1">
        {fullName[1]}
      </Text>
      <Text fontSize="lg" fontWeight="semibold">
        {office}
      </Text>
    </Flex>
  );
};
