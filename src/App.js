import React from 'react';
import './App.css';

import {Route,BrowserRouter as Router,Switch,useRouteMatch} from 'react-router-dom'

//COMPONENTS
import Homepage from './Pages/Homepage/Homepage'
import ShopComponent from './Pages/Shop/Shop'



function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopComponent}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
