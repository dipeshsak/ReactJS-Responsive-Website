import React from 'react'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route, Redirect} from 'react-router-dom'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Home from './Screens/Home'
import Services from './Screens/Services'
import NavBar from './Components/NavBar'
import Footer from './Screens/Footer'

const App =()=>{
  return(
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Services}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
    <Footer/>
    </>
  )
}

export default App