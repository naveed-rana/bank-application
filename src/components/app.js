import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import Links from './links';
import Home from './home';
import Acounts from './acounts';
import Transactions from './transactions';
import "../css/bootstrap.css";
import "../css/profile.css";



class App extends Component {
    render(){
        return(
            <Router>   
                <div>
                    <Links/>
                    <div className="container">
                    <Route exact path='/' component={Home}/>
                    <Route path='/acounts' component={Acounts}/>
                    <Route path='/transactions' component={Transactions}/>
                    </div>
                </div>
            </Router>
        )
    }
}


export default App; 