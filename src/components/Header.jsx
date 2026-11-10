import logo from "../assets/images/logo.svg";
import menu_icon from "../assets/images/icon-hamburger.svg";
import cross_icon from "../assets/images/icon-close.svg";
import { Link } from "react-router-dom";
export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header
      className={`flex justify-between items-center relative ${menuOpen ? "bg-black" : "bg-auto"}`}
    >
      <div className="left w-40">
        <img src={logo} alt="" />
      </div>
      <div className="right lg:hidden">
        <div
          onClick={() => {
            menuOpen ? setMenuOpen(false) : setMenuOpen(true);
          }}
          className="menu-icon-container"
        >
          {menuOpen ? <img src={cross_icon} /> : <img src={menu_icon} alt="" />}
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-15 lg:hidden">
          <ul className="flex flex-col text-white font-[JosefinSans] uppercase text-xl gap-3">
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Events</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
          </ul>
        </div>
      )}

      <nav className="hidden lg:block">
        <ul className="flex text-white gap-7">
          <li>
            <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>
          </li>
          <li>
            <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Careers
            </Link>
          </li>
          <li>
            <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Events
            </Link>
          </li>
          <li>
            <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Products
            </Link>
          </li>
          <li>
            <Link className="relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
