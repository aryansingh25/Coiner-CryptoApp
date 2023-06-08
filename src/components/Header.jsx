import React from "react";
import { Link } from "react-router-dom";
export default function Header({ back }) {
  return (
    <header className="header">
      <div className="widht">
        {back && (
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="1000 -1000 1000 960"
              width="400"
            >
              <path fill="white" d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </Link>
        )}
        <h1>
          <Link to="/">Coiner</Link>
        </h1>
      </div>
    </header>
  );
}
