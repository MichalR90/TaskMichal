import chromeIcon from "../assets/logo-chrome.svg";
import fireFoxIcon from "../assets/logo-firefox.svg";
import bgDots from "../assets/bg-dots.svg";
import operaIcon from "../assets/logo-opera.svg";

function ContentDownload() {
  return (
    <>
      <div className="content-download">
        <div className="content-download-part-text">
          <div className="content-download-title">
            <span>Download the extension</span>
          </div>
          <div className="content-download-content">
            <span>
              We've got more browsers in the pipeline. Please do let us know if
              you've got a favourite you'd like us to prioritize.
            </span>
          </div>
        </div>
        <div className="content-download-part-download">
          <div className="chrome-section">
            <div className="browser-icon">
              <img src={chromeIcon} alt="Chrome img"></img>
            </div>
            <div className="browser-title">
              <span>Add to Chrome</span>
            </div>
            <div className="browser-text">
              <span>Minimum version 62</span>
            </div>
            <div className="browser-bg-dots">
              <img src={bgDots} alt="bg dots"></img>
            </div>
            <div className="browser-button-install">
              <button>Add & install Extension</button>
            </div>
          </div>

          <div className="firefox-section">
            <div className="browser-icon">
              <img src={fireFoxIcon} alt="browser img"></img>
            </div>
            <div className="browser-title">
              <span>Add to Chrome</span>
            </div>
            <div className="browser-text">
              <span>Minimum version 62</span>
            </div>
            <div className="browser-bg-dots">
              <img src={bgDots} alt="bg dots"></img>
            </div>
            <div className="browser-button-install">
              <button>Add & install Extension</button>
            </div>
          </div>

          <div className="opera-section">
            <div className="browser-icon">
              <img src={operaIcon} alt="Chrome img"></img>
            </div>
            <div className="browser-title">
              <span>Add to Chrome</span>
            </div>
            <div className="browser-text">
              <span>Minimum version 62</span>
            </div>
            <div className="browser-bg-dots">
              <img src={bgDots} alt="bg dots"></img>
            </div>
            <div className="browser-button-install">
              <button>Add & install Extension</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentDownload;
