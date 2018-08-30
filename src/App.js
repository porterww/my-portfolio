import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navigation from './components/menu'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import Projects from './pages/projects'
import WorkHistory from './pages/workhistory'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
      <Switch>
        <Route exact-path='/' component={Home}/>
        <Route path='/aboutme' component={AboutMe}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/workhistory' component={WorkHistory}/>
      </Switch>
      </div>
    );
  }
}

export default App;
