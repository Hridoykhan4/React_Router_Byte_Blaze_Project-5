import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="navbar overflow-hidden bg-base-100 fixed  shadow-lg px-4  z-30">
      <div className="flex-1 overflow-hidden">
        <Link
          to="/"
          className="btn btn-ghost gap-0  text-secondary normal-case text-2xl"
        >
          Byte<span className="text-primary">Blaze</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu font-bold menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks">Bookmarks</NavLink>
          </li>
        </ul>
        <label className="toggle ml-4 text-base-content">
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleTheme}
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
