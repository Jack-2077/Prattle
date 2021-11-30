import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from '../components/Navbar';
import Appbar from '../components/Appbar';
import Chatbox from '../components/Chatbox';
import Textinput from '../components/Textinput';

const drawerWidth = 240;

export default function Home() {
  return (
    <>
      <div>
        <Box
          position='absolute'
          marginLeft={`${drawerWidth}px`}
          //  component='maibackground.default'
          sx={{ flexGrow: 1, bgcolor: '', p: 3 }}
        >
          <Appbar />
          <Toolbar />
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
