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
      email: "dshrute@gmail.com",
    };

    //Post request to the MongoDB server to send the JSON data
    axios
      .post('http://localhost:4000/app/messages', msg)
      .then(res => console.log(res.data));
  }

  //Message handler
  function handleMessage(){
    sendMessageDB();
  }
  
  //Text input chage handler
  function handleChange(e){
    setMsgInput(e.target.value);
  }

  //Clear the text box after sending message
  function handleClear(e){
    setMsgInput("");
    e.target.value = "";
  }

  function refresh(){
    setTimeout( function() { window.location.reload(); }, 100);
  }

    return (
        <div style={{
            width:"50%", 
            marginLeft: "18%"   
          }}>
  
          <TextField
            fullWidth
            id="textInput"
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
                refresh();
              }
            }}
          />
        </div>
    );
}

export default Textinput;