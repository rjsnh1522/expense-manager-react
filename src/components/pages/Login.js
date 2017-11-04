import React, { Component } from 'react';
import '../../assets/css/Login.css'

import Register from './Register';

class Login extends Component {
  constructor() {

    super()
  }


  render (){


    return (
<div className="container">
      <div className="row">
              <div className="col-md-4 col-md-offset-4">
                        <div className="form-body">
                                      <ul className="nav nav-tabs final-login">
                                          <li className="active"><a data-toggle="tab" href="#sectionA">Sign In</a></li>
                                          <li><a data-toggle="tab" href="#sectionB">Join us!</a></li>
                                      </ul>
                                      <div className="tab-content">
                                              <div id="sectionA" className="tab-pane fade in active">
                                                  <div className="innter-form">
                                                        <form className="sa-innate-form" method="post" autoComplete="off">
                                                          <input type="hidden" value="something"/>
                                                        <label>Email Address</label>
                                                        <input type="text" name="username" autoComplete="email"/>
                                                        <label>Password</label>
                                                        <input type="password" name="password" autoComplete="password"/>
                                                        <button type="submit">Sign In</button>
                                                        <a href="">Forgot Password?</a>
                                                        </form>
                                                  </div>
                                                    <div className="social-login">
                                                    <p>- - - - - - - - - - - - - Sign In With - - - - - - - - - - - - - </p>
                                                  		<ul>
                                                          <li><a href=""><i className="fa fa-facebook"></i> Facebook</a></li>
                                                          <li><a href=""><i className="fa fa-google-plus"></i> Google+</a></li>
                                                          <li><a href=""><i className="fa fa-twitter"></i> Twitter</a></li>
                                                          </ul>
                                                          </div>
                                                    <div className="clearfix"></div>
                                                </div>

                                                <Register />
                                      </div>
                            </div>
                  </div>
          </div>
    </div>

    )
  }
}


export default Login;
