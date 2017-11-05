import React, { Component } from 'react';
import '../../assets/css/Login.css'
import Register from './Register';
import Login from './Login';


class LogRegForms extends Component {
  constructor(props) {

    super(props)

  }

  submitRegister = (data) =>{

    console.log(data)
  }

  render(){
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
                                                    <Login />

                                                    <Register submitRegister={this.submitRegister}/>
                                            </div>
                                  </div>
                        </div>
                </div>
          </div>

    )
  }
}



export default LogRegForms;
