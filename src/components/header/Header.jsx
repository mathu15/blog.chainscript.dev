import "./header.css";

/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  return (
    <div>
      <video class="headerBgVideo" autoPlay muted loop>
        <source src={require("../../assets/video.mp4")} type="video/mp4" />
        <source src={require("../../assets/video.webm")} type="video/webm" />
      </video>
      {/* <img className="headerBgVideo" src={require()}></img> */}
    </div>
  );
};
