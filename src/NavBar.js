import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/articles">Articles List Page</Link>
        </li>
      </ul>
      <div className="nav-right">
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Log in
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;