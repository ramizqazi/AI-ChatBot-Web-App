import React, { useState } from 'react';

import ChatView from './view';

/* =============================================================================
<Chat />
============================================================================= */
const Chat = ({ messages, sendMessage }) => {
  const [text, setText] = useState('');

  const _handleMessageSend = () => {};

  return (
    <ChatView
      text={text}
      messages={messages}
      onTextChange={setText}
      onSend={_handleMessageSend}
    />
  );
};

/* Export
============================================================================= */
export default Chat;
