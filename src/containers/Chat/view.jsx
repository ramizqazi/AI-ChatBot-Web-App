import React from 'react';
import { Box, Img, Text, VStack } from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  Message,
  MessageList,
  MessageInput,
  ChatContainer,
} from '@chatscope/chat-ui-kit-react';
import { useLocation, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import SpeechToTextButton from '../../components/SpeechToTextButton';

/* =============================================================================
<ChatView />
============================================================================= */
const ChatView = ({ onSend, text, onTextChange }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showWelcome = pathname === '/';

  const _handleSend = () => {
    if (showWelcome) {
      navigate('/chat');
    }
    onSend();
  };

  return (
    <Box flex={1} pos="relative">
      {showWelcome && (
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
      )}
      <ChatContainer>
        {!showWelcome && (
          <MessageList>
            <Message
              model={{
                message: 'Hello my friend',
                sentTime: 'just now',
                sender: 'Joe',
              }}
            />
          </MessageList>
        )}
        <MessageInput
          placeholder="Type message here"
          attachButton={false}
          value={text}
          onChange={e => onTextChange(e.target.value)}
          onSend={_handleSend}
        />
      </ChatContainer>
      <SpeechToTextButton onTranscriptChange={onTextChange} />
    </Box>
  );
};

/* Export
============================================================================= */
export default ChatView;
