import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  Message,
  MessageList,
  MessageInput,
  ChatContainer,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';
import { useLocation, useNavigate } from 'react-router-dom';

import Welcome from '../../components/Welcome';
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
    <Box pos="relative" h="full">
      {showWelcome && <Welcome />}
      <ChatContainer>
        {!showWelcome && (
          <MessageList
            style={{ paddingBottom: 20 }}
            typingIndicator={
              loading && <TypingIndicator content={`Chatbot is typing`} />
            }
          >
            {messages?.length > 0 &&
              messages?.map(message => {
                if (message?.content?.includes('blob:https://')) {
                  return <MessageAudioBubble message={message?.content} />;
                }
                return (
                  <Message
                    key={message?.id}
                    model={{
                      message: message?.content,
                      sender: message?.role,
                      direction:
                        message?.role === 'user' ? 'outgoing' : 'incoming',
                    }}
                  />
                );
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
