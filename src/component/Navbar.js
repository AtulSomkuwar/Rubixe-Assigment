import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


function Navbar() {
  
  const state = useSelector((state) => state.HandleCart);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm" >
        <div className="container" >
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
          <img style={{height:"40px",width:"40px"}} src="assets/rubixe.jpg"/>
            Rubixe
          </NavLink>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                 HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testimonial">
                  AI INTERNSHIP
                </NavLink>
              </li>
          
          
              <li  className="nav-item">
                <NavLink className="nav-link">
                 CAREER
                </NavLink>
                </li>

                <li  className="nav-item">
              <NavLink
              className="nav-link">
                BLOG
              </NavLink>
              </li>

              <li  className="nav-item">
              <NavLink to="/cart" className="nav-link">
                ABOUT US
              </NavLink>
              </li>

              <li  className="nav-item">
              <NavLink to="/download" className="nav-link">
                CONTACT US
              </NavLink>
              </li>

              </ul>
            </div>
          </div>
       
      </nav>
    </>
  );
}

export default Navbar;
