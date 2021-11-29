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

  const showMsg = msgArr.map((arr) =>
    <Typography className="message-bubble">{arr.message}</Typography>
  )

console.log(msgArr);
  return (
    <div>
      <Button onClick={getMessages}>TEST</Button>
      {showMsg}
    </div>
  );

}

export default Chatbox;
