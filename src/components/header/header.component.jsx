import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => (
  <div className="header">
    <div className="AppName">
      The Crud App
    </div>

    <div className="options">
      <Link className="option" to="/">
        HOME
      </Link>

      <Link className="option" to="/posts">
        POSTS
      </Link>

      <Link className="option" to="/about">
        ABOUT
      </Link>
    </div>
  </div>
);

export default Header;
