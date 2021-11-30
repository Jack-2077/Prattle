import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SignUp from './components/LoginPage/SignUp';
import SignIn from './components/LoginPage/SignIn';
import { Route, Switch, Redirect } from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [isLoggedIn, setLogIn] = useState(false);



  const Pages = () => {
    return isLoggedIn &&(
    <Switch>
    <Route path='/home' component={Home} />
    </Switch>)}
    
  return (
    <div>
      <Switch>
            <Route path='/' exact >
              {isLoggedIn ? <Redirect to="/home" /> : 
                <SignIn onClick={(bool) => setLogIn(bool)}/>}
            </Route> 
            <Route path='/about' component={About} />
            <Route path='/signup' component={SignUp} />
            <Route component={Error} />
            
      </Switch>
      <Pages />
    </div>
  );
}

export default App;
