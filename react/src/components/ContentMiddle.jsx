import { useState } from "react";
import ilustrationFeatures from "../assets/illustration-features-tab-1.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function ContentMiddle() {
  const [show, setShow] = useState(false);

  const handleResize = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="content-middle">
        <div className="content-middle-img">
          <img
            onClick={handleResize}
            src={ilustrationFeatures}
            alt="feature"
            style={{ cursor: "pointer", maxWidth: "100%" }}
          />
        </div>
        <div className="content-middle-content">
          <div className="content-middle-title">
            <span>Bookmark in one click</span>
          </div>
          <div className="content-middle-text">
            <span>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </span>
          </div>
          <div className="content-middle-buttons">
            <button>More info</button>
          </div>
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
                  onClick={handleResize}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={ilustrationFeatures}
                  alt="preview"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleResize}>
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentMiddle;
