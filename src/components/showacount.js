import React from 'react';
import Showresult from './showresult';
import { connect } from 'react-redux';
import "../css/bootstrap.css";


const ShowAcount = (props) => {
  
    
    return (
        <div>
                <h1>Accounts:</h1>
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th>iD:</th>
                        <th>Account Holder:</th>
                          <th>Account Type:</th>
                            <th>Amount:</th>
                  </tr>
                {
props.acountsState.account.map((accounts,i) => 
<Showresult key={i} data = {accounts} /> )}
              </tbody>
              </table>
        </div>
    )
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps,null)(ShowAcount);
