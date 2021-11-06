import React from 'react';
import './chat.css';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar'

let messages =[
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  "ut labore et dolore magna aliqua. Rhoncus dolor purus non enim",
  "praesent elementum facilisis leo vel. Risus at ultrices mi tempus",
  "imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.",
  "imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus."
]

let displayMessage=[];
for (var i = 0; i < messages.length; i++) {
  displayMessage.push(
    <div className='chat-bubble'>
      <Avatar className="chat-avatar">A</Avatar>
      <Typography paragraph className="chat-message">
      {messages[i]}
      </Typography>
    </div> 
  );
}

function Chatbox() {
    return (
        <div className="chat-area">
          {displayMessage}
        </div>
      );
}

export default Chatbox;