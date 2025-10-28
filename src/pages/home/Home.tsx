import "./Home.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-main">
        <Searchbar
          isSticky={true}
          value=""
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
        <h1 className="home-logo">
          <img className="home-logo-svg" src={Logo}></img>McLookup
        </h1>
      </div>
      <div className="home-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="home-content"></div>
      </div>
    </div>
  );
};
