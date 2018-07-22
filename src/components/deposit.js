import React from "react";
import { connect } from "react-redux";
import { amountChange,depositaction } from "../actions/index.js";

const Deposit = (props) => {
  return (
    <div>
        {props.acountsState.deposit ?
      <form onSubmit={e => props.depositaction(e)}>
        <div className="form-group">
          <label>Your Currunt Total Amount:</label>
          <input
            type="text"
            className="form-control"
            value={props.acountsState.loginuser[0].amount}
            readOnly
          />
        </div>
        <div className="form-group">
                  <label>Enter Amount for Deposit:</label>
                  <input
                    type="number"
                    onChange={e => {
                      props.amountChange(e.target.value);
                    }}
                    className="form-control"
                    placeholder="e.g 1000"
                    min="100" 
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Deposit Now
                </button>
      </form>
      : <div>
          <h4 className="message">Your transection has been completed! ThanKYou.</h4>
          <h1>Now Your Account state:</h1>
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th>iD:</th>
                        <th>Account Holder:</th>
                          <th>Account Type:</th>
                            <th>Amount:</th>
                  </tr>
                  <tr>
                      <td>{props.acountsState.loginuser[0].id}</td>
                      <td>{props.acountsState.loginuser[0].name}</td>
                      <td>{props.acountsState.loginuser[0].accounttype}</td>
                      <td>{props.acountsState.loginuser[0].amount}</td>
                  </tr>
                  </tbody>
                  </table>
      </div>
      
      }
    </div>
  );
};

function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, {
    amountChange,
    depositaction
  })(Deposit);
  
