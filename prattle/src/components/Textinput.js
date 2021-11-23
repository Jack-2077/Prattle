import React, {useState} from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';

function Textinput() {
  const [msgInput, setMsgInput] = useState("");

  function sendMessageDB(){

    //If message input is empty exit the function
    if(!msgInput) return;

    //Create msg in JSON format
    const msg = {
      message: msgInput,
      email: "Lii@gmail.com",
    };

    //Post request to the MongoDB server to send the JSON data
    axios
      .post('http://localhost:4000/app/messages', msg)
      .then(res => console.log(res.data));
  }

  function handleMessage(){
    sendMessageDB();
  }
  
  function handleChange(e){
    setMsgInput(e.target.value);
  }

  function handleClear(e){
    setMsgInput("");
    e.target.value = "";
  }

    return (
        <div style={{
            width:"50%", 
            marginLeft: "18%"   
          }}>
  
          <TextField
            fullWidth="true"
            id=""
            label="Enter your message here..."
            multiline
            rows={5}
            variant="filled"
            margin="normal"
            onChange={handleChange}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleMessage();
                handleClear(e);
              }
            }}
          />
        </div>
    );
}

export default Textinput;