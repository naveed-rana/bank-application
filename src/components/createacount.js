import React, { Component } from 'react';
import { connect } from "react-redux";

import { 
  nameChange,
  passwordChange,
  acountChange,
  idChange,
  amountChange,
  onsubmitaction,
  otherAcount


 } from "../actions/index.js";

import "../css/bootstrap.css";

class CreateAcount extends Component {
 constructor(){
   super();
  var min = 1;
  var max = 10000;
  var rand =  min + (Math.random() * (max-min));
 var rand = Math.round(rand);
  this.state ={
    rand
  }

 }
  
  render(){
    return (
        <div>
        {this.props.acountsState.createacount ?
    <form
     onSubmit={(e) =>{
     
      this.props.onsubmitaction(e);
    }} 
     >
    <div className="form-group">
    <label>ID:</label>
    
    <input type="text" value={this.state.rand} className="form-control" readOnly />
  </div>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" 
    
    onChange={(e) =>{
      
      this.props.nameChange(e.target.value);
    }} 
    
    className="form-control" placeholder="Enter Name" required />
  </div>

  <div className="form-group">
    <label>Password:</label>
    <input type="password"
    
    onChange={(e) =>{
      this.props.passwordChange(e.target.value);
    }} 

    className="form-control" placeholder="Password" required />
  </div>

  <div className="form-group">
    <label >Acount Type:</label>
    <select className="form-control"
    onChange={(e) =>{
    this.props.acountChange(e.target.value);
  }} required>
      <option value="Current">Current</option>
      <option value="Saving">Saving</option>
    </select>
  </div>
  
   <div className="form-group">
  <label>Amount:</label>
  <input type="number" 
  onChange={(e) =>{
    this.props.amountChange(e.target.value);
  }} 
  className="form-control" placeholder="e.g 5000 Rs" required />
</div>
  
  
  <button type="submit" onClick={() =>{
    this.props.idChange(this.state.rand);
  }}  className="btn btn-primary">Submit</button>
</form>
:
<div><h1 className="message">Your Accout has been created! ThanKYou.</h1></div>
}  

{

  this.props.acountsState.showmessage ? 
   <button id="otheracount" onClick={() =>{
    this.props.otherAcount();
  }}>Create an Other Account</button>
   :
      <div></div> 
   }
        </div>
    )
}}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps,{
  nameChange,
  passwordChange,
  acountChange,
  amountChange,
  idChange,
  otherAcount,
  onsubmitaction
})(CreateAcount);
