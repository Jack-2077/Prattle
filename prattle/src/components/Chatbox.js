import React from 'react';
import { Typography } from '@mui/material';
import Message from './ChatArea/Message';

function Chatbox() {
  return (
    <div>
      <Message message={userMessage} />
      <Message />
    </div>
  );
}

export default Chatbox;
