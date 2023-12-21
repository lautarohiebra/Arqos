import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Inicio",
    },
    {
      path: "/nosotros",
      name: "Nosotros",
    },
    {
      path: "/servicios",
      name: "Servicios",
    },
  ];

  return (
    <>
      <header className="w-full px-5 sm:px-1 bg-base-100 shadow-sm fixed top-0 z-50">
        <nav className="navbar container mx-auto font-semibold">
          <div className="navbar-start">
            <Link to="/">
              <img
                src="/public/assets/logoHorizontalDark.svg"
                alt="Logo"
                className="w-52 min-w-[150px]"
              />
            </Link>
          </div>
          <div className=" navbar-center hidden lg:flex">
            {/* Links Desktop */}

            <ul className="menu menu-horizontal px-1 gap-2 text-md">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-primary hover:bg-base-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              to="/contacto"
              className="btn btn-neutral btn-outline rounded-none hidden sm:flex text-md font-bold"
            >
              Contacto
            </Link>
          </div>
          <div className="dropdown dropdown-end ml-1">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* Links menu toogle */}

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 text-center"
            >
              {links.map((link, index) => (
                <li className="hover-bordered" key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
              <Link to="/contacto">
                <button className="btn btn-primary btn-sm w-48 mt-2 rounded-none">
                  Contacto
                </button>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
