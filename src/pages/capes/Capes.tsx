import "./Capes.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { capeList } from "../../scripts/consts";
import { CapeDisplay } from "../../components/cape-display/CapeDisplay";
import type { Cape } from "../../scripts/types";
import { useState } from "react";
import { CapeModal } from "../../components/cape-modal/CapeModal";
export const Capes = () => {
  const navigate = useNavigate();

  const [selectedCape, setSelectedCape] = useState<Cape | undefined>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <div className="capes">
      <div className="capes-main">
        <Searchbar
          isSticky={true}
          value=""
          onSearch={(value) => void navigate(`/search/${value}`)}
        />
      </div>
      <div className="capes-content-section">
        <img src={backgroundSVG} className="background-svg" />
        <div className="capes-content">
          <h1>Minecraft Capes List</h1>
          <div className="capes-list">
            {Object.values(capeList).map((cape, i) => (
              <CapeDisplay
                key={i}
                selectCape={() => {
                  setSelectedCape(cape);
                  setIsPopupOpen(true);
                }}
                capeUrl={cape.url}
                type={cape.type}
                title={cape.title}
              />
            ))}
          </div>
        </div>

        <CapeModal
          cape={selectedCape}
          isOpen={selectedCape !== undefined && isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>
    </div>
  );
};
