import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";


const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);
  console.log("Header render")

  useEffect(()=>{
console.log("Use effect render")
  }, [isLoggedin]);
  
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Namaste Logo" />
      </div>
      <div className="nav-items">
        <ul>
         <li><Link to="/">Home</Link></li> 
         <li> <Link to="/about">About Us</Link></li> 
          <li>
           <Link to="/contact" >Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
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
