import React, { Fragment } from "react";
import {FiShoppingCart} from "react-icons/fi"

const Navbar=()=>{
    return <Fragment>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid nav-color ">
    <a className="navbar-brand nav_link nav_logo" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav_ul">
        <li className="nav-item ">
          <a className="nav-link active nav_link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav_link" href="#">
            Link
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle nav_link"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item nav_link" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item nav_link" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item nav_link" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled nav_link">Shop</a>
        </li>
      </ul>

    </div>
    <div className="icons">
      <FiShoppingCart className="shop_icons"/>
      {/* <div className="shop_number">
        1
      </div> */}
      </div>
  </div>
</nav>


    </Fragment>
}

export default Navbar