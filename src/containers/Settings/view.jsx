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
  const _handleTemperatureChange = (e) => {
    if (e.target.value <= 1) {
      onTempChange(e.target.value)
    }
  }

  return (
    <VStack justify="space-between" h="full" alignItems="flex-start">
      <Box w="full">
        <HStack justify="space-between">
          <Box flex={3}>
            <Text fontSize={['lg', 'lg', 'xl']} fontWeight="semibold">
              Temperature:
            </Text>
            <Text fontSize={['xs', 'xs', 'sm']}>
              Temperature is a parameter of OpenAI ChatGPT that governs the
              creativity of the responses.
            </Text>
          </Box>
          <Input
            flex={1}
            type="number"
            value={temp}
            placeholder="0.1 - 1"
            onChange={_handleTemperatureChange}
          />
        </HStack>
        <HStack justify="space-between" mt={5}>
          <Box flex={3}>
            <Text fontSize={['lg', 'lg', 'xl']} fontWeight="semibold">
              Default Query:
            </Text>
            <Text fontSize={['xs', 'xs', 'sm']}>
              Any default text you want to send with every message you send.
            </Text>
          </Box>
          <Input
            flex={1}
            value={defQuery}
            placeholder="Give short Answer"
            onChange={(e) => onDefQueryChange(e.target.value)}
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
