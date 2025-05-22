import { useState } from "react";
import closeHamburgerButton from "../assets/icon-close.svg";
import hamburgerButton from "../assets/icon-hamburger.svg";
import { useNavigate } from "react-router-dom";
import bookMark from "../assets/logo-bookmark.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const handleClickFeatures = () => {
    navigate("/features");
  };
  const handleClickPricing = () => {
    navigate("/pricing");
  };
  const handleClickContacts = () => {
    navigate("/contacts");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="nav-bar">
        <img className="navbar-logo" src={bookMark}></img>
        <ul className={`nav-bar-li ${isOpen ? "nav-bar-li-active" : ""}`}>
          <li>
            <div className="nav-bar-elements">
              <img className="navbar-logo-active" src={bookMark}></img>
              <img
                onClick={toggleClass}
                className="nav-bar-hamburger-close"
                src={closeHamburgerButton}
                alt="close"
              ></img>
            </div>
          </li>
          <li className="nav-bar-clicable-elements">
            <a onClick={handleClickFeatures}>FEATURES</a>
          </li>
          <li className="nav-bar-clicable-elements">
            <a onClick={handleClickPricing}>PRICING</a>
          </li>
          <li className="nav-bar-clicable-elements">
            <a onClick={handleClickContacts}>CONTACTS</a>
          </li>
          <li className="nav-bar-clicable-elements">
            <button onClick={handleClickLogin}>LOGIN</button>
          </li>
        </ul>
        {!isOpen && (
          <img
            onClick={toggleClass}
            className="nav-bar-hamburger-img"
            src={hamburgerButton}
            alt="menu"
          ></img>
        )}
      </nav>
    </>
  );
}
export default NavBar;
