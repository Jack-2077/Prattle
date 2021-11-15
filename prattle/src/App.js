import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import SignUp from './components/LoginPage/SignUp';
import SignIn from './components/LoginPage/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/signin' component={SignIn} exact />
          <Route path='/signup' component={SignUp} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
