import React from 'react';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';

type IFrameYTProps = {
  embedId: string;
};

export const IFrameYT = ({ embedId }: IFrameYTProps) => {
  return (
    <Box>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?modestbranding=0&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
};
