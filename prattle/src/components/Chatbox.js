import React, { useState, useEffect } from 'react';
import './chat.css';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

function Chatbox() {
  const [msgArr, setMsgArr] = useState([]);
  let msgString = '';

  async function getMessages() {
    axios.get('http://localhost:4000/app/messages').then((res) => {
      setMsgArr(JSON.parse(res.data.messageRes));
    });
  }

  const showMsg = msgArr.map((arr) => (
    <Typography className='message-bubble' key={arr._id}>
      {arr.message}
    </Typography>
  ));

  useEffect(() => {
    getMessages();
  }, []);
  return <div>{showMsg}</div>;
}

export default Chatbox;
