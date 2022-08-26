import { Header } from "../../components/header/Header";
import { Posts } from "../../components/posts/Posts";
import { SideBar } from "../../components/sidebar/SideBar";
import "./home.css";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};
