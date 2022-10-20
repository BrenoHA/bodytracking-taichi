import React from 'react';

import { useRouter } from 'next/router';
import {
  Button,
  ButtonGroup,
  Text,
  Flex,
  Box,
  HStack,
  Image,
  Stack,
} from '@chakra-ui/react';
import { TeamMember } from '../TeamMember';

export const HomePage = () => {
  const router = useRouter();

  const handleClick = (ev: any) => {
    ev.preventDefault();
    router.push('/mouvements');
  };

  return (
    <Box backgroundColor="#FFF9F1">
      {/* Body Tracking Tai Chi */}
      <Box id="Body Tracking Tai Chi" paddingLeft="28" paddingTop="8">
        <Text fontSize="5xl" fontWeight="bold" marginBottom="6">
          Body Tracking Tai Chi
        </Text>
        <Flex boxSize={'50%'}>
          <Text fontSize="xl">
            Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de imprimerie
            depuis les années 1500, quand un imprimeur anonyme assembla ensemble
            des morceaux de texte pour réaliser un livre spécimen de polices de
            texte. Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            simplement du faux texte employé dans la composition et la mise en
            page avant impression.
          </Text>
        </Flex>
        <Button colorScheme="teal" onClick={handleClick} marginTop="8">
          Mouvements
        </Button>
      </Box>

      {/* Le Projet */}

      <Flex
        id="Le Projet"
        flexDir={'column'}
        alignItems="center"
        height="100%"
        paddingX="16"
        paddingY="10"
      >
        <Text fontSize="4xl" fontWeight="bold" marginBottom="6">
          Le Projet
        </Text>
        <Flex>
          <Flex marginRight="10" direction="column" alignItems="center">
            <Image
              width="48"
              objectFit="cover"
              src="imtAtlantique.png"
              alt="IMT Atlantique Logo"
            />
            <Text fontSize="lg" align="center" marginTop="8">
              Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
              texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est le faux texte standard de
              imprimerie depuis les années 1500, quand un imprimeur anonyme
              assembla ensemble des morceaux de texte pour réaliser un livre
              spécimen de polices de texte. Le Lorem Ipsum est simplement du
              faux texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est simplement du faux texte employé
              dans la composition et la mise en page avant impression.
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              width="48"
              objectFit="cover"
              src="imtAtlantique.png"
              alt="IMT Atlantique Logo"
            />
            <Text fontSize="lg" align="center" marginTop="8">
              Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
              texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est le faux texte standard de
              imprimerie depuis les années 1500, quand un imprimeur anonyme
              assembla ensemble des morceaux de texte pour réaliser un livre
              spécimen de polices de texte. Le Lorem Ipsum est simplement du
              faux texte employé dans la composition et la mise en page avant
              impression. Le Lorem Ipsum est simplement du faux texte employé
              dans la composition et la mise en page avant impression.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* L'équipe */}

      <Flex
        id="L'équipe"
        direction="column"
        alignItems="center"
        height="100%"
        backgroundColor="#E8DBD1"
        paddingY="10"
      >
        <Text fontSize="4xl" fontWeight="bold" marginBottom="6">
          L&apos;équipe
        </Text>
        <HStack spacing="16">
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </HStack>
        <HStack spacing="16" marginTop="8">
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </HStack>
      </Flex>

      {/* Bibliographie */}

      <Flex
        id="Bibliographie"
        flexDir={'column'}
        alignItems="center"
        height="100%"
        backgroundColor="#FFEDE6"
        paddingX="28"
        paddingY="10"
      >
        <Text fontSize="4xl" fontWeight="bold" marginBottom="6">
          Bibliographie
        </Text>
        <Text fontSize="xl">
          Quest-ce que le Lorem Ipsum? Le Lorem Ipsum est simplement du faux
          texte employé dans la composition et la mise en page avant impression.
          Le Lorem Ipsum est le faux texte standard de imprimerie depuis les
          années 1500, quand un imprimeur anonyme assembla ensemble des morceaux
          de texte pour réaliser un livre spécimen de polices de texte. Le Lorem
          Ipsum est simplement du faux texte employé dans la composition et la
          mise en page avant impression. Le Lorem Ipsum est simplement du faux
          texte employé dans la composition et la mise en page avant impression.
        </Text>
      </Flex>
    </Box>
  );
};
