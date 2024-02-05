import React from 'react';
import { Img, Text, VStack } from '@chakra-ui/react';

import logoImg from '../assets/images/logo.png';

/* =============================================================================
<Welcome />
============================================================================= */
const Welcome = () => {
  return (
    <VStack
      pos="absolute"
      left={0}
      right={0}
      mt="10%"
      rowGap="10px"
      textAlign="center"
    >
      <Img src={logoImg} w="150px" h="150px" />
      <Text fontSize="3xl" fontWeight="semibold">
        Welcome To Chatbot
      </Text>
      <Text fontSize="lg" fontWeight="medium">
        Your AI assistant
      </Text>
    </VStack>
  );
};

/* Export
============================================================================= */
export default Welcome;
