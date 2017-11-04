import React, { Component } from 'react';
import axios from 'axios';
import AlertContainer from 'react-alert';

const url = "http://localhost:4000";


class Register  extends Component {


  constructor(props) {

    super(props);
    this.state = {
      full_name:"",
      email: "",
      password: ""
    }

    this.inputVaue = this.inputVaue.bind(this);

  }

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = (msg) => {
    this.msg.show(msg, {
      time: 2000,
      type: 'success',
      icon: <img src="path/to/some/img/32x32.png" />
    })
  }



  inputVaue(e){
    this.setState({[e.target.name]: e.target.value});
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);

  var isValid =  this.checkValidation();
  var errorBox = document.getElementById("errorMessage");
  // console.log(errorBox.innerHtml = "tess")
  errorBox.innerHtml = "";
      if(isValid){
        errorBox.innerHtml = "";
        axios.post(url+'/users',{user: this.state})
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                // console.log(error);
              });
      }
      else{
        let msg = "Error in the form please fill the form correctly"
        this.showAlert(msg);

      }



  }

  checkValidation = () => {

    var fname = this.state.full_name.length;
    var email = this.state.email.length;
    var password = this.state.password.length;

      if (fname > 0 && email > 0 && password >= 6){
        return true;
      }
      return false;




  }


  render (){

    return (
      <div id="sectionB" className="tab-pane fade">
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                  <div className="innter-form">
                        <form className="sa-innate-form" method="post" onSubmit={this.submitForm} >
                                <label>Name</label>
                                <input type="text"
                                  name="full_name"
                                  value={this.state.full_name}
                                  onChange={this.inputVaue}
                                />
                                <label>Email Address</label>
                                <input type="text"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.inputVaue}
                                />
                                <label>Password</label>
                                <input type="password"
                                  name="password"
                                  value={this.state.password}
                                  onChange={this.inputVaue}
                                />
                                <p id="errorMessage"> </p>
                                <button type="submit">Join now</button>
                          </form>
                  </div>
                  <div className="social-login">
                          <p>- - - - - - - - - - - - - Register With - - - - - - - - - - - - - </p>
                        <ul>
                              <li><a href=""><i className="fa fa-facebook"></i> Facebook</a></li>
                              <li><a href=""><i className="fa fa-google-plus"></i> Google+</a></li>
                              <li><a href=""><i className="fa fa-twitter"></i> Twitter</a></li>
                        </ul>
                    </div>
      </div>
    )
  }
}


export default Register ;
