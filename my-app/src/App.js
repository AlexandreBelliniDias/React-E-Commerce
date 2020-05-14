import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './cart/Cart';
import Default from './components/Default';


class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    )
  }
}
export default App;
