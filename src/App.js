import React from 'react'
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import Header from './components/Header'
import Footer from "./components/Footer"; 
import {BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Views/Home' 
import About from './Views/About'

function App() {
  return (
    <Router>
    <Header/>
    <Footer/>
   
   
    <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
  
    </Router>



  );
}

export default App;
