import React from 'react';
import { TextField } from '@mui/material';

function Textinput() {
    return (
        <div style={{
            width:"50%", 
            marginLeft: "18%"   
          }}>
  
          <TextField
            fullWidth="true"
            id="filled-multiline-static"
            label="Enter your message here..."
            multiline
            rows={5}
            variant="filled"
            margin="normal"
          />
        </div>
    );
}

export default Textinput;