import "./Home.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { InfoBox } from "../../components/info-box/InfoBox";

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
        <div className="home-content">
          <div className="home-info-boxes">
            <InfoBox
              title="What's New?"
              message="Profiles now show multiple capes. Removed capes appear in black and white. Click a cape to view its description."
            />
            <InfoBox
              title="How to Use"
              message="Enter a player's username or UUID in the search bar above and press Search. You'll see their skin, active capes, and removed capes."
            />
            <InfoBox
              title="About MC Lookup"
              message="MC Lookup is a free Minecraft player lookup tool. View player skins, capes, and UUIDs easily and quickly."
            />
            <InfoBox
              title="Creator"
              message="Developed by a Minecraft community developer. Not affiliated with Mojang or Microsoft."
            />
            <InfoBox
              title="More Coming Soon"
              message="Work is ongoing to add more features such as name history, Elytra previews, and better cape details."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
