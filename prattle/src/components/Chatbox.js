import React, { useState, useEffect } from 'react';
import './chat.css';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { red } from '@mui/material/colors';

function Chatbox() {
  const [msgArr, setMsgArr] = useState([]);

  function getMessages() {
    axios.get('http://localhost:4000/app/messages').then((res) => {
      setMsgArr(JSON.parse(res.data.messageRes));
    });
  }

  const deleteMessage = (e) => {
    e.preventDefault();
    let id = e.currentTarget.id;

    axios
      .delete('http://localhost:4000/app/messages', { data: { id: id } })
      .then((res) => {
        console.log(res.status);
      });
    getMessages();
  };

  const showMsg = msgArr.map((arr) => (
    <div className='message-box'>
      <p className='message-bubble'>
        {arr.message}
        <DeleteIcon
          id={arr._id}
          className='remove-icon'
          onClick={deleteMessage}
          sx={{ '&:hover': { color: red[500] } }}
        />
      </p>
    </div>
  ));

  useEffect(() => {
    getMessages();
  }, []);
  return <div id="chat">{showMsg}</div>;
}

export default Chatbox;
