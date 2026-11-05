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
      <div className="right 3xl:hidden">
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
        <div className="absolute top-15 3xl:hidden">
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

      <nav className="hidden 3xl:block">
        <ul className="flex text-white gap-7">
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
      </nav>
    </header>
  );
}
