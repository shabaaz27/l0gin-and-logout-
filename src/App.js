import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
// import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from "./components/login/Login";
import AlbumOrder from './components/Album_Order/Album_order';
import Protected from './components/protected/Protected';


 class App extends Component {
  render() {
    return (
      <div> 
        <BrowserRouter>
        <Route path="/register">
        <Register/>
        </Route>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/Album">
        <Protected Component={AlbumOrder}/>
        {/* <AlbumOrder/> */}

        </Route>
        Routing
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
