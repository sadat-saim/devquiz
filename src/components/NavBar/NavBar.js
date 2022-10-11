import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 mb-2 shadow-md">
        <div className="container mx-auto">
          <div className="flex-1">
            <Link
              to="/"
              className="btn btn-ghost normal-case text-2xl p-0 pl-1"
            >
              Dev Quiz
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/">Topics</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
