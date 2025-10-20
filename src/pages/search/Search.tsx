import "./Search.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { Profile } from "../../components/profile/Profile";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Player } from "../../scripts/types";
import { getPlayerData } from "../../scripts/apiHandler";

export const Search = () => {
  const navigate = useNavigate();
  const { searchterm } = useParams<{ searchterm: string }>();

  const [player, setPlayer] = useState<Player | null>(null);
  useEffect(() => {
    if (searchterm) {
      getPlayerData(searchterm)
        .then((value) => {
          setPlayer(value);
        })
        .catch(() => setPlayer(null));
    }
  }, [searchterm]);

  return (
    <div className="search">
      <div className="search-main">
        <Searchbar
          value={searchterm ?? ""}
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
        <div className="search-profile-holder">
          {searchterm ? (
            player ? (
              <Profile player={player} />
            ) : (
              <h1 className="search-nothing-found">No user found!</h1>
            )
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="search-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="search-content"></div>
      </div>
    </div>
  );
};
