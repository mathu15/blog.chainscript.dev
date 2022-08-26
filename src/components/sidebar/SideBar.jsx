import "./sidebar.css";

/**
 * @author
 * @function SideBar
 **/

export const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About us</span>
        <img
          src={require("../../assets/chainscriptabout.png")}
          alt=""
          width="100%"
        />
        <p>
          Inspired by Dr Craig S Wright's vision of blockchain, we built our
          company to develop on-chain applications that will instil honesty to
          money, integrity to data, transparency to systems, trust and
          efficiency to our networks.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">style</li>
          <li className="sidebarListItem">sport</li>
          <li className="sidebarListItem">tech</li>
          <li className="sidebarListItem">cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">follow us</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
          <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
          <i className=" sidebarIcon fa-brands fa-square-youtube"></i>
          <i className=" sidebarIcon fa-brands fa-linkedin-in"></i>
        </div>
      </div>
    </div>
  );
};
