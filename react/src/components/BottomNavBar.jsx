import facebookIcon from "../assets/icon-facebook.svg";
import twitIcon from "../assets/icon-twitter.svg";
import bookmarkLogo from "../assets/logo-bookmark.svg";
function BottomNavBar() {
  return (
    <>
      <div className="bottom-navBar">
        <ul>
          <li>
            <img className="img-bottom-navbar" src={bookmarkLogo}></img>
          </li>
          <li className="bottom-navbar-clicable-elements">
            <a>FEATURES</a>
          </li>
          <li className="bottom-navbar-clicable-elements">
            <a>PRICING</a>
          </li>
          <li className="bottom-navbar-clicable-elements">
            <a>CONTACT</a>
          </li>
        </ul>
        <div className="navbar-bottom-elements">
          <img className="fb-twit" src={facebookIcon}></img>
          <img className="fb-twit" src={twitIcon}></img>
        </div>
      </div>
    </>
  );
}
export default BottomNavBar;
