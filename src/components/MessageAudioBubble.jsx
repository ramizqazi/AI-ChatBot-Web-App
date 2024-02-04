import React from 'react';
import { HStack } from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Message } from '@chatscope/chat-ui-kit-react';

/* =============================================================================
<MessageAudioBubble />
============================================================================= */
const MessageAudioBubble = ({ message }) => {
  return (
    <Message model={{
      type: "custom",
      direction: "outgoing"
    }}>
      <Message.CustomContent>
        <HStack>
          <audio src={URL.createObjectURL(message)} controls />
        </HStack>
      </Message.CustomContent>
    </Message>
  );
};

/* Export
============================================================================= */
export default MessageAudioBubble;
