import "./Search.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { Profile } from "../../components/profile/Profile";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import type { Player } from "../../scripts/types";
import { getPlayerData } from "../../scripts/apiHandler";

export const Search = () => {
  const navigate = useNavigate();
  const { searchterm } = useParams<{ searchterm: string }>();

  const [player, setPlayer] = useState<Player | null>(null);

  if (searchterm) {
    getPlayerData(searchterm)
      .then((value) => {
        setPlayer(value);
      })
      .catch(() => setPlayer(null));
  }

  return (
    <div className="search">
      <div className="search-main">
        <Searchbar onSearch={(value) => void navigate(`/search/${value}`)} />
        {player ? (
          <div className="search-profile-holder">
            <Profile player={player} />
          </div>
        ) : (
          <h1>No user found!</h1>
        )}
      </div>
      <div className="search-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="search-content"></div>
      </div>
    </div>
  );
};
