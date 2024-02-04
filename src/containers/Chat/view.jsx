import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Img, Text, VStack } from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  Message,
  MessageList,
  MessageInput,
  ChatContainer,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { useLocation, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import SpeechToText from '../../components/SpeechToText';
import MessageAudioBubble from '../../components/MessageAudioBubble';
import { selectIsLoading } from '../../redux/messagesSlice';

/* =============================================================================
<ChatView />
============================================================================= */
const ChatView = ({ messages, loading, onSend }) => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const { pathname } = useLocation();
  const showWelcome = pathname === '/';

  const _handleSend = () => {
    if (showWelcome) {
      navigate('/chat');
    }
    onSend(text);

    setText('');
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
          <MessageList
            typingIndicator={
              loading && <TypingIndicator content={`Chatbot is typing`} />
            }
          >
            {messages?.length > 0 &&
              messages?.map(message => {
                if (typeof message?.content === 'object') {
                  return <MessageAudioBubble message={message?.content} />
                }
                return (
                  <Message
                    key={message?.id}
                    style={message?.content.includes('Voice') ? { padding: '20px' } : null}
                    model={{
                      message: message?.content,
                      sender: message?.role,
                      direction:
                        message?.role === 'user' ? 'outgoing' : 'incoming',
                    }}
                  />
                )
              })}
          </MessageList>
        )}
        <MessageInput
          value={text}
          attachButton={false}
          onChange={setText}
          onSend={_handleSend}
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
          placeholder="Type message here"
        />
      </ChatContainer>
      <SpeechToText onTranscriptChange={setText} />
    </Box>
  );
};

const mapStateToProps = state => ({
  loading: selectIsLoading(state),
});

const propsAreEqual = (prevProps, nextProps) =>
  prevProps.messages?.length === nextProps.messages?.length &&
  prevProps.loading === nextProps.loading;

/* Export
============================================================================= */
export default connect(mapStateToProps)(React.memo(ChatView, propsAreEqual));
