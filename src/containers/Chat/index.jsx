import React from 'react';
import { connect } from 'react-redux';
import { useToast } from '@chakra-ui/react';

import ChatView from './view';
import {
  selectMessages,
  sendMessage as sendMessageAction,
} from '../../redux/messagesSlice';

/* =============================================================================
<Chat />
============================================================================= */
const Chat = ({ messages, sendMessage }) => {
  const toast = useToast();
  
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
};

/* Export
============================================================================= */
export default connect(mapStateToProps, mapDisptachToProps)(Chat);
