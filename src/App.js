import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/HomepageComponent'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'

const HatsPage=()=>{
  return(
    <div>
    <h1>WELCOME TO THE HATS PAGE</h1>
  </div>
  )
}

//COMPONENTS


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
