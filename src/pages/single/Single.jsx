import { SideBar } from "../../components/sidebar/SideBar";
import { SinglePost } from "../../components/singlepost/SinglePost";
import "./single.css";

/**
 * @author
 * @function Single
 **/

export const Single = (props) => {
  console.log(props);
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};
