import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Namaste Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {isLoggedin ? (
            <button
              className="login_button"
              onClick={() => setIsLoggedin(false)}
            >
              Logout
            </button>
          ) : (
            <button
              className="login_button"
              onClick={() => setIsLoggedin(true)}
            >
              Login
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
