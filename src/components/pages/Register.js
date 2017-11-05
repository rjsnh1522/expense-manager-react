import React, { Component } from 'react';
import axios from 'axios';
import AlertContainer from 'react-alert';
import Validator from 'validator';

import PropTypes from 'prop-types';

import InLineError from '../shared/InLineError';


const url = "http://localhost:4000";


class Register  extends Component {


  constructor(props) {

    super(props);
    this.state = {
      data:{
        full_name:"",
        email:'',
        password:''
      },
      loading:false,
      errors:{}
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
    this.setState({
      data: {...this.state.data,[e.target.name]: e.target.value}
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

  let msg = "";

      if(Object.keys(errors).length === 0){
        this.props.submitRegister(this.state.data)
        // axios.post(url+'/users',{user: this.state})
        //       .then(function (response) {
        //         console.log("then")
        //         console.log(response.data);
        //         msg = response.data.msg
        //         console.log(msg)
        //           this.showAlert(msg);
        //           console.log(this.showAlert());
        //       })
        //       .catch(function (error) {
        //           // console.log("catch");
        //           // msg = "Something went wrong please try again later";
        //           // this.showAlert(msg);
        //       });
      }
      else{
        msg = "Error in the form please fill the form correctly"
        this.showAlert(msg);

      }



  }


validate = (data) => {
  const errors = {};

  if(!Validator.isEmail(data.email)) errors.email = "Not a valid email";
  if(!data.full_name) errors.full_name = "Name cant be blank";
  if(!data.password) errors.password = "Password cant be blank and should be greater then 6 chars";

  return errors;
}


  render (){

    const { data, errors } = this.state;
    return (
      <div id="sectionB" className="tab-pane fade">
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                  <div className="innter-form">
                        <form className="sa-innate-form" method="post" onSubmit={this.submitForm} >
                                <label>Name</label>
                                <input type="text"
                                  name="full_name"
                                  value={data.full_name}
                                  onChange={this.inputVaue}
                                />
                                { errors.full_name && <InLineError text={errors.full_name}/>}
                                <label>Email Address</label>
                                <input type="text"
                                  name="email"
                                  value={data.email}
                                  onChange={this.inputVaue}
                                />
                                { errors.email && <InLineError text={errors.email}/>}
                                <label>Password</label>
                                <input type="password"
                                  name="password"
                                  value={data.password}
                                  onChange={this.inputVaue}
                                />
                                { errors.password && <InLineError text={errors.password}/>}
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


Register.PropTypes = {
  submitRegister: PropTypes.func.isRequired
}

export default Register ;
