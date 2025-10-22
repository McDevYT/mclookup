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

  const [isLoading, setIsLoading] = useState(false);

  const [isSearchbarSticky, setIsSearchbarSticky] = useState(
    window.scrollY > 40
  );

  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    if (searchterm) {
      setIsLoading(true);
      window.scrollTo(0, 0);
      getPlayerData(searchterm)
        .then((value) => {
          setPlayer(value);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setPlayer(null);
        });
    }
  }, [searchterm]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSearchbarSticky(window.scrollY > 190);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="search">
      <div className="search-main">
        <Searchbar
          isSticky={searchterm ? true : isSearchbarSticky}
          value={searchterm ?? ""}
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
        {searchterm && (
          <div className="search-profile-holder">
            {player ? (
              <Profile player={player} />
            ) : (
              !isLoading && (
                <h1 className="search-nothing-found">No Player found</h1>
              )
            )}
          </div>
        )}
      </div>
      <div className="search-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="search-content"></div>
      </div>
    </div>
  );
};
