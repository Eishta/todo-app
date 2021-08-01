import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import TodoFunctional from './TodoFunctional';
import TodoClass from './TodoClass';
import TodoHooks from './TodoHooks';
import TodoHoc from './TodoHoc';
import TodoRedux from './TodoRedux';
import '../styles/page.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <section>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/functional' component={TodoFunctional}/>
        <Route path='/class' component={TodoClass}/>
        <Route path='/hooks' component={TodoHooks}/>
        <Route path='/hoc' component={TodoHoc}/>
        <Route path='/redux' component={TodoRedux}/>
      </Switch>
      </section>
    </Router>
  )
}

export default App;