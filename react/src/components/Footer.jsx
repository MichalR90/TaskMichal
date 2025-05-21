import { useState, useEffect } from "react";
import CheckEmail from "./CheckEmail";

function Footer() {
  const [numberJoined, SetNumberJoined] = useState("35,000");
  useEffect(() => {
    const interval = setInterval(() => {
      SetNumberJoined("0");
    }, 20000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="footer">
        <div className="footer-users-joined">
          <span>{numberJoined} + ALREADY JOINED</span>
        </div>
        <div className="footer-title">
          <span>Stay up-to-date with what we're doing</span>
        </div>
        <CheckEmail></CheckEmail>
      </div>
    </>
  );
}

export default Footer;
