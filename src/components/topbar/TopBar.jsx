import { Link } from "react-router-dom";
import "./topbar.css";

/**
 * @author
 * @function TopBar
 **/

export const TopBar = (props) => {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <img
          className="logo"
          src={require("../../assets/logo.png")}
          alt="Logo"
        />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        <i className=" topIcon fa-brands fa-square-facebook"></i>
        <i className=" topIcon fa-brands fa-square-twitter"></i>
        <i className=" topIcon fa-brands fa-square-youtube"></i>
        <i className=" topIcon fa-brands fa-linkedin-in"></i>
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
