import "./Home.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-main">
        <Searchbar
          value=""
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
      </div>
      <div className="home-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="home-content"></div>
      </div>
    </div>
  );
};
