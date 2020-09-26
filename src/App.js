import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/HomepageComponent'
import {Route,BrowserRouter as Router,Switch,useRouteMatch} from 'react-router-dom'

const HatsPage=(props)=>{
  const match =useRouteMatch()
  console.log(props)
  console.log(match)
  return(
    <div>
    <h1>WELCOME TO THE HATS PAGE{match.params.id}</h1>
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
        <Route path='/hats/:id' component={HatsPage}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
