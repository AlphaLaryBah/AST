import React from "react";
import {  Link } from "react-router-dom";


function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/home"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Personal"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Personal
                </Link>
              </li>
              <li>
                <Link
                  to="/Stocks"
                  style={{ textDecoration: "none" }}
                  className="text-dark"
                >
                  Stocks
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5> */}
            {/* <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <a
              role="button" */}
              {/* className="btn btn-link text-dark"
              href="tel:+12065551234"
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link text-dark"
              href="mailto:notreal@notreal.co"
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-envelope-o" /> A$'t@gmail.co
            </a>
          {/* </div> */}
        </div>
      </div> 
    </footer>
  );
}

export default Footer;
