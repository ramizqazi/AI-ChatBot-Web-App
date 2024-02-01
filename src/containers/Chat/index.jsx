import React from 'react';
import { Box, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaMicrophone } from 'react-icons/fa';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react';

/* =============================================================================
<Chat />
============================================================================= */
const Chat = () => {
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
export default Chat;
