import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { Game } from './components/Game';
import { Map } from './components/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/">
              <Game />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
