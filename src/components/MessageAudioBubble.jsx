import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Message } from '@chatscope/chat-ui-kit-react';

/* =============================================================================
<MessageAudioBubble />
============================================================================= */
const MessageAudioBubble = ({ message }) => {
  console.log(message)
  return (
    <Message
      model={{
        type: 'custom',
        direction: 'outgoing',
      }}
    >
      <Message.CustomContent>
        <HStack>
          {message ? (
            <audio src={message} controls />
          ) : (
            <Text color='red.600'>Coudn't load message something went wrong</Text>
          )}
        </HStack>
      </Message.CustomContent>
    </Message>
  );
};

/* Export
============================================================================= */
export default MessageAudioBubble;
