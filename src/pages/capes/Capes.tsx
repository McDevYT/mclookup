import "./Capes.css";
import backgroundSVG from "../../assets/backgroundHEHE.svg";
import { Searchbar } from "../../components/searchbar/Searchbar";
import { useNavigate } from "react-router-dom";
import { capeList } from "../../scripts/consts";
import { CapeDisplay } from "../../components/cape-display/CapeDisplay";
export const Capes = () => {
  const navigate = useNavigate();

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
          {Object.values(capeList).map((cape) => (
            <CapeDisplay
              capeUrl={cape.url}
              description="Hello"
              type={cape.type}
              title={cape.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
