import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SignUp from './components/LoginPage/SignUp';
import SignIn from './components/LoginPage/SignIn';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Articles from './components/Articles';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setLogIn] = useState(false);

  const handleLogin = () => {
    setLogIn(!isLoggedIn);
  };
  return (
    <Switch>
      <Route path='/' exact component={SignIn} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/articles' component={Articles} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
