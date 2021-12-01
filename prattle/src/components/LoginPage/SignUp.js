import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [validSignIn, setValidSignIn] = useState('');

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    //store user input
    const data = new FormData(event.currentTarget);
    const userFirstName = data.get('firstName');
    const userLastName = data.get('lastName');
    const userEmail = data.get('email');
    const userPassword = data.get('password');

    //when user input not empty
    if (userFirstName && userLastName && userEmail && userPassword) {
      const registered = {
        first_name: userFirstName,
        last_name: userLastName,
        email: userEmail,
        password: userPassword,
      };

      //send post request to server
      axios
        .post('http://localhost:4000/app/signup', registered)
        .then((res) => {
          if (!res.data.bool) {
            setValidSignIn('A user with this email already exists'); //else display error message
          } else {
            history.push('/signin'); //redirect when a user signs up
          }
        })
        .catch(function (error) {
          console.log(error.toJSON());
        });
    } else {
      setValidSignIn('Please enter the required fields');
    }
  };

  const SignUpForm = () => (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <span style={{ color: 'red' }}>{validSignIn}</span>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link component={RouterLink} variant='body2' to='/signin'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );

  return <SignUpForm />;
}
