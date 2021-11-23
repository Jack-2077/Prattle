import React, {useState} from 'react';
import './chat.css';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Chatbox() {
  const [msgArr, setMsgArr] = useState([]);
  let msgString = "";

  async function  getMessages() {
    axios
      .get("http://localhost:4000/app/messages")
      .then(res => {
        setMsgArr(JSON.parse(res.data.messageRes));
      })
  }

  for(let i=0; i<msgArr.length;i++){
    msgString += `${msgArr[i].message}`;
  }

  return (
    <div>
      <Button onClick={getMessages}>TEST</Button>
      <Typography>{msgString}</Typography>
    </div>
  );

}

export default Chatbox;
