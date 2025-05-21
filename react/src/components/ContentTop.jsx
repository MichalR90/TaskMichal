import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import illustrationHero from "../assets/illustration-hero.svg";

function ContentTop() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="content-top">
        <div className="description">
          <div className="description-title">
            <span>A Simple Bookmark Manager</span>
          </div>
          <div className="description-content">
            <span className="desctiption-content">
              A clean and simple interface to organize your favourite
              websites.Open a new browser tab and see your sites load instantly.
              Try it for free.
            </span>
          </div>
          <div className="description-content-buttons">
            <button>Get it on Chrome</button>
            <button>Get it on Firefox</button>
          </div>
        </div>
        <div className="content-immages">
          <img
            onClick={handleShow}
            src={illustrationHero}
            className="content-immage"
          ></img>
        </div>
      </div>
      {show && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Podgląd obrazka</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleShow}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={illustrationHero}
                  alt="preview"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleShow}>
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
export default ContentTop;
