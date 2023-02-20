import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-success">
        <div className="container">
          <span
            className="navbar-brand text-light fw-bold"
            style={{ letterSpacing: "1px" }}
          >
            Contact Manager
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
