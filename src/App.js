import React from 'react';
import './App.css';

import {Route,BrowserRouter as Router,Switch,useRouteMatch} from 'react-router-dom'

//COMPONENTS
import Homepage from './Pages/Homepage/HomepageComponent'
import ShopComponent from './Pages/Shop/ShopComponent'



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
