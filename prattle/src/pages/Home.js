import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../App.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Home(){
    return(
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justify="flex-end">
          <Grid item xs={12}>
            <Item>Heading bar</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Main nav</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Message area</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Small nav</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Text area</Item>
          </Grid>
        </Grid>
      </Box> 

    );
}

export default Home;
