import logo from "../assets/images/logo.svg";
import menu_icon from "../assets/images/icon-hamburger.svg";
export default function Header() {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <div className="menu-icon-container">
          <img src={menu_icon} alt="" />
        </div>
      </div>
    </header>
  );
}
