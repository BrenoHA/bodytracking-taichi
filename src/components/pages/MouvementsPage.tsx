import React from 'react';

import {
  Button,
  ButtonGroup,
  Text,
  Flex,
  Box,
  Image,
  Badge,
  HStack,
} from '@chakra-ui/react';

import { CardMouvement } from '../CardMouvement';
import { Iproperty } from '../../interface/Iproperty';
import { properties } from '../../data';
import { newProperties } from '../../dataEmpty';

export const MouvementsPage = () => {
  const [isShowMoreActivated, setIsShowMoreActivated] =
    React.useState<boolean>(false);

  return (
    <Box backgroundColor="#FFF9F1" height="100%">
      {/* Mouvements */}

      <Flex id="Mouvements" flexDir={'column'} alignItems="center">
        <Text fontSize="4xl" fontWeight="bold" marginTop={6}>
          Mouvements
        </Text>
        <Box marginY={4} width="60rem">
          <Text fontSize="md" fontWeight="bold" align="center">
            Pour chaque mouvement, vous pouvez choisir le niveau avec lequel il
            est exécuté : Débutant, Intermédiaire, Avancé. Vous trouverez des
            conseils et indications pour réaliser au mieux les mouvements
            proposés.
          </Text>
        </Box>
        <Flex marginBottom={6} wrap="wrap" justifyContent="center">
          <CardMouvement data={properties[0].data} />
          <CardMouvement data={properties[1].data} />
          <CardMouvement data={properties[2].data} />
          <CardMouvement data={properties[3].data} />
          <CardMouvement data={properties[4].data} />
          <CardMouvement data={properties[5].data} />
          <CardMouvement data={properties[6].data} />
          <CardMouvement data={properties[7].data} />
        </Flex>
        {/* <HStack spacing={10} marginBottom={6}>
          <CardMouvement data={properties[0].data} />
          <CardMouvement data={properties[1].data} />
          <CardMouvement data={properties[2].data} />
        </HStack>
        <HStack spacing={10} marginBottom={6}>
          <CardMouvement data={properties[3].data} />
          <CardMouvement data={properties[4].data} />
          <CardMouvement data={properties[5].data} />
        </HStack>
        <HStack spacing={10} marginBottom={6}>
          <CardMouvement data={properties[6].data} />
          <CardMouvement data={properties[7].data} />
        </HStack> */}
        <Button
          display={!isShowMoreActivated ? '' : 'none'}
          onClick={() => setIsShowMoreActivated(!isShowMoreActivated)}
          marginBottom="4"
          colorScheme="blackAlpha"
        >
          Voir plus
        </Button>
        <Button
          display={isShowMoreActivated ? '' : 'none'}
          onClick={() => setIsShowMoreActivated(!isShowMoreActivated)}
          marginBottom="4"
          colorScheme="blackAlpha"
        >
          Voir moin
        </Button>
        <Text fontSize="2xl" display={isShowMoreActivated ? '' : 'none'}>
          Mouvements à compléter
        </Text>
        <Box display={isShowMoreActivated ? '' : 'none'}>
          <Flex
            direction="row"
            marginBottom={6}
            wrap="wrap"
            justifyContent="center"
          >
            {newProperties.map((n) => (
              <CardMouvement key={n.toString()} data={n.data} />
            ))}
          </Flex>
        </Box>

        <Button
          display={isShowMoreActivated ? '' : 'none'}
          onClick={() => setIsShowMoreActivated(!isShowMoreActivated)}
          marginBottom="4"
          colorScheme="blackAlpha"
        >
          Voir moin
        </Button>
      </Flex>
    </Box>
  );
};
