import "./Features.css";
import { useState } from "react";
import ilustrationFeaturesTab1 from "../assets/illustration-features-tab-1.svg";
import ilustrationFeaturesTab2 from "../assets/illustration-features-tab-2.svg";
import ilustrationFeaturesTab3 from "../assets/illustration-features-tab-3.svg";

function Features() {
  const [bookmarkIsActive, setBookmarkIsActive] = useState(false);
  const [speedySharingIsActive, setSpeeydSharingIsActive] = useState(false);
  const [easySharingIsActive, setEasySharingIsActive] = useState(false);
  const [showBookmark, setShowBookmark] = useState(false);
  const [showSpeedySharing, setShowSpeedySharing] = useState(false);
  const [showEasySharing, setShowEasySharing] = useState(false);

  const handleResizeBookmark = () => {
    setShowBookmark(!showBookmark);
  };
  const handleResizeSpeedySharing = () => {
    setShowSpeedySharing(!showSpeedySharing);
  };
  const handleResizeEasySharing = () => {
    setShowEasySharing(!showEasySharing);
  };

  const handlerBookmarking = () => {
    setBookmarkIsActive(true);
    setSpeeydSharingIsActive(false);
    setEasySharingIsActive(false);
  };
  const handlerSpeedySharing = () => {
    setBookmarkIsActive(false);
    setSpeeydSharingIsActive(true);
    setEasySharingIsActive(false);
  };

  const handlerEasySharing = () => {
    setBookmarkIsActive(false);
    setSpeeydSharingIsActive(false);
    setEasySharingIsActive(true);
  };
  return (
    <>
      <div className="features">
        <div className="features-title">
          <span>Features</span>
        </div>
        <div className="features-content">
          <span>
            Our aim is to make it quick and easy for you to acces your favourite
            febsites. Your bookmarks sync beetwen your devices so you can acces
            them on the go.
          </span>
        </div>
        <div className="features-list">
          <ul>
            <li>
              <a onClick={handlerBookmarking}> Simple Bookmarking</a>
            </li>
            <li>
              <a onClick={handlerSpeedySharing}> Speedy Searching</a>
            </li>
            <li>
              <a onClick={handlerEasySharing}> Easy Sharing</a>
            </li>
          </ul>
        </div>
      </div>

      {/* below content */}

      {bookmarkIsActive && (
        <div className="features-list-elements">
          <div className="features-list-picture-container">
            <img
              onClick={handleResizeBookmark}
              src={ilustrationFeaturesTab1}
              className="img-tab1"
            ></img>
            <div className="blue-line-features"></div>
          </div>
          <div className="features-list-text-container">
            <div className="features-list-title-container">
              <span>Bookmark in one click</span>
            </div>
            <div className="features-list-description-container">
              <span>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives your complete control over how you
                managa your favourite sites.
              </span>
            </div>
          </div>
        </div>
      )}
      {showBookmark && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Display</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleResizeBookmark}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={ilustrationFeaturesTab1}
                  alt="preview"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleResizeBookmark}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {speedySharingIsActive && (
        <div className="features-list-elements">
          <div className="features-list-picture-container">
            <img
              onClick={handleResizeSpeedySharing}
              src={ilustrationFeaturesTab2}
              className="img-tab2"
            ></img>
            <div className="blue-line-features"></div>
          </div>
          <div className="features-list-text-container">
            <div className="features-list-title-container">
              <span>Intelligent search</span>
            </div>
            <div className="features-list-description-container">
              <span>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </span>
            </div>
          </div>
        </div>
      )}
      {showSpeedySharing && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Display</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleResizeSpeedySharing}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={ilustrationFeaturesTab2}
                  alt="preview"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleResizeSpeedySharing}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {easySharingIsActive && (
        <div className="features-list-elements">
          <div className="features-list-picture-container">
            <img
              onClick={handleResizeEasySharing}
              src={ilustrationFeaturesTab3}
              className="img-tab3"
            ></img>
            <div className="blue-line-features"></div>
          </div>
          <div className="features-list-text-container">
            <div className="features-list-title-container">
              <span>A Simple Bookmark Manager</span>
            </div>
            <div className="features-list-description-container">
              <span>
                A clean and simple interface to organize your favourite
                websites.Open a new browser tab and see your sites load
                instantly. Try it for free.
              </span>
            </div>
          </div>
        </div>
      )}
      {showEasySharing && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Display</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleResizeEasySharing}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={ilustrationFeaturesTab3}
                  alt="preview"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={handleResizeEasySharing}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Features;
