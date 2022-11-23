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
        <Box boxSize={'50%'}>
          <Text fontSize="xl">
            Le projet “Body Tracking Tai Chi” est un projet étudiant ayant pour
            but de créer un outil répertoriant des mouvements de Tai Chi pouvant
            servir à toute personne intéressée de près ou de loin à cet art. Il
            contient des mouvements réalisés par un avatar grâce à la
            technologie Body Tracking, les mouvements sont proposés avec
            différents niveaux de précision dans les gestes. Des conseils sont
            proposés pour passer d’un niveau à l’autre.
          </Text>
          <Text fontSize="xl">
            Le coeur du projet est la création d’une base de données contenant
            toutes les données relatives aux différentes capatations réalisées.
            La captation des mouvements a été réalisée grâce au système
            Optitrack.
          </Text>
          <Text fontSize="xl">
            Ce projet a été réalisé en collaboration avec l’école de Tai Chi
            WUSHU, à Brest. Ce sont la professeur Ren Ping SU-GOARZIN et ses
            élèves qui ont permis de donner vie aux avatars et d’enrichir la
            base de donnée.
          </Text>
        </Box>
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
              width="44"
              objectFit="cover"
              src="imtAtlantique.png"
              alt="IMT Atlantique Logo"
            />
            <Text fontSize="lg" align="center" marginTop="8">
              IMT Atlantique est une grande école d’ingénieurs faisant partie du
              groupe Mines-Ponts. Issue de la fusion de Télécom Bretagne et des
              Mines de Nantes, l’école est présente sur trois sites : Brest,
              Nantes et Rennes. Depuis sa création en 2017, cette institution
              est largement représentée dans les classements des écoles
              d’ingénieurs françaises (5e du classement “L’Etudiant 2022”) et
              des universités internationales (126ème en “Engineering” du “The
              World University Ranking 2023”).
            </Text>
          </Flex>
          <Flex direction="column" alignItems="center">
            <Image
              width="44"
              objectFit="cover"
              src="logo_taichi.png"
              alt="IMT Atlantique Logo"
            />
            <Text fontSize="lg" align="center" marginTop="8">
              IMT Atlantique incite tout au long de leur parcours les étudiants
              à découvrir les équipements disponibles sur le site et à profiter
              du savoir et de l’expertise des nombreux enseignants-chercheurs.
              Notamment grâce à des projets de groupes de plus en plus
              professionnalisant au fil de l’avancée du cursus. Le projet “Body
              Tracking Tai Chi” est un des sujets de projet Commande Entreprise
              présent en deuxième année, dans lequel les étudiants doivent
              répondre à la commande d’une entreprise, ici l’école de Tai Chi
              WUSHU de Brest.
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
          <TeamMember name="Cleo CASABONNE" office="Chef de projet" />
          <TeamMember
            name="Quentin SANTARELLI"
            office="Communication interne"
          />
          <TeamMember name="Breno HASPARYK" office="Communication interne" />
          <TeamMember name="Léa VIGOUROUX" office="Communication externe" />
        </HStack>
        <HStack spacing="16" marginTop="8">
          <TeamMember name="Julie ROUVIERE " office="Documentation" />
          <TeamMember name="Chiara GOZLAN" office="Documentation" />
          <TeamMember name="Emma RAULET" office="Communication externe" />
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
        paddingBottom={28}
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
