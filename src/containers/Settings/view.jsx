import React from 'react';
import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react';

/* =============================================================================
<SettingsView />
============================================================================= */
const SettingsView = ({
  temp,
  onSave,
  defQuery,
  onTempChange,
  onDefQueryChange,
}) => {
  return (
    <VStack justify="space-between" h="full" alignItems="flex-start">
      <Box w="full">
        <HStack justify="space-between">
          <Box flex={3}>
            <Text fontSize={22} fontWeight="semibold">
              Temperature:
            </Text>
            <Text fontSize="sm">
              Temperature is a parameter of OpenAI ChatGPT that governs the
              creativity of the responses.
            </Text>
          </Box>
          <Input
            flex={1}
            type="number"
            value={temp}
            placeholder="0.1 - 1"
            onChange={onTempChange}
          />
        </HStack>
        <HStack justify="space-between" mt={5}>
          <Box flex={3}>
            <Text fontSize={22} fontWeight="semibold">
              Default Query:
            </Text>
            <Text fontSize="sm">
              Any default text you want to send with every message you send.
            </Text>
          </Box>
          <Input
            flex={1}
            value={defQuery}
            placeholder="Give short Answer"
            onChange={onDefQueryChange}
          />
        </HStack>
      </Box>
      <Button
        size="lg"
        px={10}
        onClick={onSave}
        alignSelf="flex-end"
      >
        Save
      </Button>
    </VStack>
  );
};

/* Export
============================================================================= */
export default SettingsView;
