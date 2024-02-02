import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { Box, IconButton } from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  Message,
  MessageList,
  MessageInput,
  ChatContainer,
} from '@chatscope/chat-ui-kit-react';

/* =============================================================================
<ChatView />
============================================================================= */
const ChatView = () => {
  return (
    <Box flex={1} pos="relative">
      <ChatContainer>
        <MessageList>
          <Message
            model={{
              message: 'Hello my friend',
              sentTime: 'just now',
              sender: 'Joe',
            }}
          />
        </MessageList>
        <MessageInput placeholder="Type message here" attachButton={false} />
      </ChatContainer>
      <IconButton
        icon={<FaMicrophone />}
        pos="absolute"
        bottom="5px"
        left="-35px"
        bg="transparent"
      />
    </Box>
  );
};

/* Export
============================================================================= */
export default ChatView;
