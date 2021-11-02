import './App.css';
import Home from './components/Home';
import About from './components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
