import React, { Component } from 'react';
import PropTypes from 'prop-types';


const InLineError = ({ text }) => <p style= {{color:"red"}}> { text }</p>;


InLineError.PropTypes = {
  text: PropTypes.string.isRequired
}
export default InLineError;
