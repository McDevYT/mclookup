import "./Home.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";

export const Home = () => {
  return (
    <div className="home-div">
      <div className="home-main">
        <Searchbar />
        <h1>McLookup</h1>
      </div>
      <div className="home-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="home-content"></div>
      </div>
    </div>
  );
};
