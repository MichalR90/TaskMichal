function BottomNavBar() {
  return (
    <>
      <div className="bottom-navBar">
        <ul>
          <li>
            <img
              className="img-bottom-navbar"
              src="../src/assets/logo-bookmark.svg"
            ></img>
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
          <img className="fb-twit" src="../src/assets/icon-facebook.svg"></img>
          <img className="fb-twit" src="../src/assets/icon-twitter.svg"></img>
        </div>
      </div>
    </>
  );
}
export default BottomNavBar;
