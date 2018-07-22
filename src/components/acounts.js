import CreateAcount from './createacount';
import ShowAcount from './showacount';

import React from "react";
import "../css/bootstrap.css";
import { Route,NavLink } from "react-router-dom";

const Acounts = () => {
  return (
    <div>
       
        <div className="row">
        <h1 className="message">Welcome to Account  Section!.</h1>
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item">
              <NavLink activeClassName="active" to="/acounts/create">Create Account</NavLink>
              </li>
              <li className="list-group-item">
              <NavLink activeClassName="active" to="/acounts/id">Show Accounts</NavLink>
              </li>
              <li className="list-group-item pad">
              
              </li>
              
              
            </ul>
          </div>
         
          <div className="col-md-9">
               
          
               <Route path='/acounts/create' component={CreateAcount}/>
               <Route path='/acounts/id' component={ShowAcount}/>
             
 
         </div>
    </div>
    </div>
  );
};

export default Acounts;
