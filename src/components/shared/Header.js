import React, { Component } from 'react';
import { Route,  NavLink } from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';

class Header extends Component {
  constructor() {
    super()

    this.state ={
      username: "",
      password: ""
    }



  }

  render(){
    return(
      <div className="wrapper">
      <div>
          <nav className="navbar navbar-default inverse">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/home" activeClassName="active">home</NavLink>
                </li>
                <li ><NavLink exact to="/" activeClassName="active">Login</NavLink></li>
              </ul>
            </div>
          </nav>
      </div>
      <div>
        <Route exact path="/" component={Login}/>
        <Route  path="/home" component={Home}/>
      </div>
    </div>

    )
  }
}



export default Header;
