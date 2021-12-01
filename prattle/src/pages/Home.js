import * as React from 'react';
import Box from '@mui/material/Box';
import Chatbox from '../components/Chatbox';
import Textinput from '../components/Textinput';
import Navbar from '../components/Navbar';

const drawerWidth = 240;

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Box
          position='absolute'
          marginLeft={`${drawerWidth}px`}
          //  component='maibackground.default'
          sx={{ flexGrow: 1, bgcolor: '', p: 3 }}
        >
          <Chatbox />
        </Box>
        <Box
          position='fixed'
          marginLeft={`${drawerWidth}px`}
          sx={{
            bottom: 0,
            width: 1,
            height: 0.15,
            backgroundColor: 'background.default',
          }}
        >
          <Textinput />
        </Box>
      </div>
    </>
  );
}
