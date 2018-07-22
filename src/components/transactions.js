import React from "react";
import "../css/bootstrap.css";
import { connect } from "react-redux";
import {
  Route,
  NavLink
} from "react-router-dom";
import Withdraw from "./withdraw";
import Deposit from "./deposit";

import { nameChange, passwordChange, login, logout } from "../actions/index.js";

const Transactions = props => {


  return (
    <div>
      <h1 className="message">
        {" "}
        Welcome!Please Enter Details For Transaction!
      </h1>

      <div className="row">
        <div className="col-md-3">
          <form onSubmit={e => props.login(e)}>
            <ul className="list-group">
              <li className="list-group-item">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    onChange={e => {
                      props.nameChange(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Enter Name"
                    required
                  />
                </div>
              </li>
              <li className="list-group-item">
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    onChange={e => {
                      props.passwordChange(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
              </li>
              <li className="list-group-item">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </li>
              <li className="list-group-item pad1" />
            </ul>
          </form>
        </div>

        <div className="col-md-9">
          {props.acountsState.loginsuccess ? (
            <div>
              <div className="row">
                <h1 className="message">
                  {" "}
                  You are Successfully Login as{" "}
                  <b>{props.acountsState.loginuser[0].name}!</b>
                </h1>
                <div className="col-md-3">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <NavLink
                        activeClassName="active"
                        to="/transactions/withdraw"
                      >
                        withdraw
                      </NavLink>
                    </li>
                    <li className="list-group-item">
                      <NavLink
                        activeClassName="active"
                        to="/transactions/deposit"
                      >
                        Deposit
                      </NavLink>
                    </li>
                    <li className="list-group-item pad" />
                  </ul>
                </div>
                <div className="col-md-7 marginstop">
                  <Route path="/transactions/withdraw" component={Withdraw} />
                  <Route path="/transactions/deposit" component={Deposit} />
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary btns1"
                    onClick={() => props.logout()}
                  >
                    LogOut!
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="loginmessage">
                Please login first! for Transection
              </h1>
            </div>
          )}

          {props.acountsState.loginfailure ? (
            <div>
              <h1 className="loginmessage">
                user name and Password are incorrect, please try again!
              </h1>
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  nameChange,
  passwordChange,
  login,
  logout
})(Transactions);
