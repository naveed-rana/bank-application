import { combineReducers } from "redux";
import {
  NAMECHANGE,
  PASSWORDCHANGE,
  ACCOUNTTYPECHANGE,
  AMOUNT,
  ONSUBMITACTION,
  IDCHANGE,
  OTHERACOUNT,
  LOGIN,
  LOGOUT,
  WITHDRAW,
  DEPOSIT
} from "../actions/index.js";

let initialstate = {
  account: [
    {
      id: "5454",
      name: "Naveed",
      password: "navi",
      accounttype: "Saving",
      amount: "666335"
    },
    {
      id: "4877",
      name: "Umar Saikhu",
      password: "naviiddsdf",
      accounttype: "Current",
      amount: "343534"
    }
  ],
  loginuser: [],
  name: "naveed",
  password: "pass",
  accounttype: "current",
  amount: "1254",
  id: "784",
  showmessage: false,
  createacount: true,
  loginsuccess: false,
  loginfailure: false,
  withdraw: true,
  deposit: true
};

function acountsState(state = initialstate, action) {
  switch (action.type) {
    case NAMECHANGE:
      return Object.assign({}, state, {
        name: action.nametxt
      });

    case PASSWORDCHANGE:
      return Object.assign({}, state, {
        password: action.password
      });

    case ACCOUNTTYPECHANGE:
      return Object.assign({}, state, {
        accounttype: action.accounttype
      });
    case IDCHANGE:
      return Object.assign({}, state, {
        id: action.id
      });

    case AMOUNT:
      return Object.assign({}, state, {
        amount: action.amount
      });
    case OTHERACOUNT:
      return Object.assign({}, state, {
        createacount: true,
        showmessage: false
      });

    case ONSUBMITACTION:
      action.event.preventDefault();

      var addtoacounts = {
        name: state.name,
        password: state.password,
        accounttype: state.accounttype,
        id: state.id,
        amount: state.amount
      };
      var arrayvar = state.account.slice();
      arrayvar.push(addtoacounts);

      
      return Object.assign({}, state, {
        account: arrayvar,
        createacount: false,
        showmessage: true
      });

    case LOGIN:
      action.event.preventDefault();
      let user = state.account.filter(
        item => state.name === item.name && state.password === item.password
      );

      if (user.length > 0) {
        return Object.assign({}, state, {
          loginuser: user,
          loginsuccess: true,
          loginfailure: false
        });
      } else {
        return Object.assign({}, state, {
          loginfailure: true,
          loginsuccess: false
        });
      }

    case LOGOUT:
      return Object.assign({}, state, {
        loginsuccess: false,
        withdraw: true,
        deposit: true
      });

    case WITHDRAW:
      action.event.preventDefault();
      let accountsdetails = state.account.filter(
        item =>
          state.loginuser[0].name !== item.name &&
          state.loginuser[0].password !== item.password
      );
      let curamounts = state.loginuser[0].amount - state.amount;
      var addtoacountnow = {
        name: state.loginuser[0].name,
        password: state.loginuser[0].password,
        accounttype: state.loginuser[0].accounttype,
        id: state.loginuser[0].id,
        amount: curamounts
      };

      accountsdetails.push(addtoacountnow);
      let usersdetails = [];
      usersdetails.push(addtoacountnow);
      return Object.assign({}, state, {
        account: accountsdetails,
        loginuser: usersdetails,
        withdraw: false
      });

    case DEPOSIT:
      action.event.preventDefault();
      let accounts = state.account.filter(
        item =>
          state.loginuser[0].name !== item.name &&
          state.loginuser[0].password !== item.password
      );
      let curamount =
      parseInt(state.loginuser[0].amount) + parseInt(state.amount);
      var addtoacount = {
        name: state.loginuser[0].name,
        password: state.loginuser[0].password,
        accounttype: state.loginuser[0].accounttype,
        id: state.loginuser[0].id,
        amount: curamount
      };

      accounts.push(addtoacount);
      let users = [];
      users.push(addtoacount);
      return Object.assign({}, state, {
        account: accounts,
        loginuser: users,
        deposit: false
      });

    default:
      return state;
  }
}
const rootReducer = combineReducers({ acountsState });
export default rootReducer;
