import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a> Home </a>
            </li>
            <li>
              <a>Blogs</a>
              <ul className="p-2 not-last:">
                <li>
                  <a> Technology </a>
                </li>
                <li>
                  <a> Health </a>
                </li>
              </ul>
            </li>
            <li>
              <a> About </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl uppercase "> ChadMin Blog </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a> Home </a>
          </li>
          <li>
            <details>
              <summary> Blogs </summary>
              <ul className="p-2">
                <li>
                  <a> Technology </a>
                </li>
                <li>
                  <a> Education </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a> About </a>
          </li>
        </ul>
      </div>

      {/* Login Button */}
      <div className="navbar-end">
        <LoginButton />
      </div>
    </div>
  );
};

export default Header;
