import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="main">
        <img className="ig" src="photo.png" alt="" />
        <h1>
          <input type="text" placeholder="Your E-mail" className="input" />
          <button className="bt">Subscribe Now!</button>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {/* coulmn1 */}
          <div className="col">
            <h4>PaternerShip</h4>
            <ul className="list-unstyled">
              <li>Websites</li>
              <li>Social</li>
              <li>Media</li>
              <li>Branding</li>
            </ul>
          </div>
          {/* coulmn2 */}
          <div className="col">
            <h4>About</h4>
            <ul className="list-unstyled">
              <li>Our</li>
              <li>Project</li>
              <li>Career</li>
            </ul>
          </div>
          {/* coulmn3 */}
          <div className="col">
            <h4>Support</h4>
            <ul className="list-unstyled">
              <li>Our</li>
              <li>Project</li>
              <li>Support</li>
              <li>Request</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-small">
            &copy;{new Date().getFullYear()} Hamed | All right reserved | Terms
            Of Services | privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
