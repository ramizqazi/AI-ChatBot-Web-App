import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useToast } from '@chakra-ui/react';

import ChatView from './view';
import {
  selectMessages,
  addMessage as addMessageAction,
  sendMessage as sendMessageAction,
} from '../../redux/messagesSlice';

/* =============================================================================
<Chat />
============================================================================= */
const Chat = ({ messages, addMessage, sendMessage }) => {
  const toast = useToast();

  useEffect(() => {
    if(messages?.length === 0){
      addMessage({id: '01', role: 'assistant', content: 'Hello, how may i help you ?'})
    }
  }, [])
  
  const _handleMessageSend = async text => {
    try {
      if (!text) {
        return;
      }

      sendMessage(text);
    } catch (e) {
      toast({
        status: 'error',
        title: 'Something went wrong',
        description: `${e}`,
      });
    }
  };

  return <ChatView messages={messages} onSend={_handleMessageSend} />;
};

const mapStateToProps = state => ({
  messages: selectMessages(state),
});

const mapDisptachToProps = {
  sendMessage: sendMessageAction,
  addMessage: addMessageAction,
};

/* Export
============================================================================= */
export default connect(mapStateToProps, mapDisptachToProps)(Chat);
