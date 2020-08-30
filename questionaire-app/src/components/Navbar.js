import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";

const Navbar = (props) => {
// page redirecting from another page
// setTimeout(()=>{
//   props.history.push('/about')
// }, 2000)
  return (
    <nav className="nav-wrap green darken-3">
      <div className="container">
        <a href="#Home" className="brand-logo center">
          Questionaire App
        </a>
        </div>
    </nav>
  );
};

export default Navbar;