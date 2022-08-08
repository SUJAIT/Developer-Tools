import React from 'react';
import { FaTools } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start"></div>
      <Link to="/">
        <h1 className="text-xl navbar-center">
          DeveloperTools <FaTools />
        </h1>
      </Link>

      <div class="navbar-end"></div>
    </div>
  );
};

export default Navbar;

