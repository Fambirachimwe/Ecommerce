import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom';



const HatsPage = () => (
  <div>
    <h2>Hats Page .</h2>
  </div>
)


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component ={ HomePage } />
          <Route path='/hats' component ={ HatsPage } />
      </Switch>
       
    </div>
  );
}

export default App;
