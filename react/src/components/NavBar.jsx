import "./NavBar.css";
import { useState } from "react";
import logo from "../assets/logo-bookmark.svg";
import hamburgerButton from "../assets/icon-hamburger.svg";
import hamburgerCloseButton from "../assets/icon-close.svg";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className={show ? "nav-bar-active" : "nav-bar"}>
        <div className={show ? "nav-bar-elements-active" : "nav-bar-elements"}>
          <img className="nav-bar-logo" src={logo} alt="logo"></img>
          <img
            className={
              show ? "nav-bar-hamburger-close-button" : "nav-bar-hamburger-icon"
            }
            onClick={handleShow}
            src={show ? hamburgerCloseButton : hamburgerButton}
            alt="hamburger Button"
          ></img>
        </div>
        <div className={show ? "nav-bar-list-active" : "nav-bar-list"}>
          <ul>
            <li>
              <a>FEATURES</a>
            </li>
            <li>
              <a>PRICING</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li className={show ? "nav-bar-login-active" : "nav-bar-login"}>
              <a>LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavBar;
