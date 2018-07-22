import React from "react";
import { NavLink } from "react-router-dom";
import "../css/bootstrap.css";
import "../css/profile.css";

const Links = () => {
  return (
    <div>
      <div className="container" id="navs">
     <ul>
  <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
  <li><NavLink activeClassName="active" to="/acounts">Acounts</NavLink></li>
  <li><NavLink activeClassName="active" to="/transactions">Transactions</NavLink></li>

</ul>
</div>
      
      
    </div>
  );
};

export default Links;
