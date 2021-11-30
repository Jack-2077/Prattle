import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ForumIcon from '@mui/icons-material/Forum';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function Navbar() {
  const [userList, setUserList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios
      .get('http://localhost:4000/app/users')
      .then((res) => {
        setUserList(Object.values(res.data.userList));
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <ForumIcon />
            </ListItemIcon>
            <ListItemText
              primary='General Chat'
              button
              onClick={() => history.push('/home')}
            />
          </ListItem>
          <ListItem button onClick={() => history.push('/articles')}>
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary='News' />
          </ListItem>
          <ListItem button onClick={() => history.push('/about')}>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='About' button />
          </ListItem>
        </List>
        <Divider />
        <List>
          {userList.map((user, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <Avatar {...stringAvatar(user)} />
              </ListItemIcon>
              <ListItemText primary={user} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Navbar;
