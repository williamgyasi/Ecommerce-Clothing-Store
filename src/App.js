import React from 'react';
import './App.css';

import {Route,BrowserRouter as Router,Switch,useRouteMatch} from 'react-router-dom'

//COMPONENTS
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shop/Shop'



function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route  path='/shop' component={Shop}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
