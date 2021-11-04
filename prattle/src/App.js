import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route component={Error} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
