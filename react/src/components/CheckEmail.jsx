import { useState } from "react";

function CheckEmail() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const checkEmailHandler = (e) => {
    e.preventDefault();

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="footer-form">
      <form onSubmit={checkEmailHandler}>
        <div className="forms-elements">
          <div className="footer-inputs">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Please enter your e-mail"
              className={`footer-form-input ${
                error ? "footer-form-input-error" : ""
              }`}
            />
            {error && (
              <p className="footer-error-message">
                "Whoops, make sure it's an email"
              </p>
            )}
          </div>
          <div className="footer-contact-buttons">
            <button
              className={`footer-contact-button ${
                error ? "footer-contact-button-error" : ""
              }`}
              type="submit"
            >
              Contact Us
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckEmail;
