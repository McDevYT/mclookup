import { useEffect, useRef, useState } from "react";
import type { Player, PlayerCape } from "../../scripts/types";
import { CopyableFormLabel } from "../copyable-form-label/CopyableFormLabel";
import { ProfileCapeList } from "../profile-cape-list/ProfileCapeList";
import { SkinCanvas } from "../skin-displayer/SkinCanvas";
import "./Profile.css";
import { easterEggs } from "../../scripts/consts";
import { CapeModal } from "../cape-modal/CapeModal";

export const Profile = (props: { player: Player }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const [selectedCape, setSelectedCape] = useState<PlayerCape | undefined>();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const easterEgg = easterEggs[props.player.uuid];
  let username = props.player.name;

  if (easterEgg?.prefix) {
    username = easterEgg.prefix + " " + props.player.name;
  }

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.color = easterEgg?.nameColor ?? "";
    }
  }, [props.player]);

  /**const handleSkinDownload = async () => {
    try {
      const response = await fetch(props.player.skin, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${props.player.name}-skin.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Failed to download skin:", err);
    }
  };*/

  return (
    <div className="profile">
      <div className="profile-skinviewer">
        <SkinCanvas
          className="profile-skincanvas"
          skinUrl={props.player.skin}
          slim={props.player.model === "slim"}
        />{/**
          
          <button onClick={handleSkinDownload}>Download</button>
          */        }
      </div>
      <div className="profile-stats">
        <h1 ref={headingRef}>{username}</h1>
        <CopyableFormLabel label="UUID" value={props.player.uuid} />
        <CopyableFormLabel
          label="Head command"
          value={`/give @p minecraft:player_head[profile={name:"${props.player.name}"}]`}
        />
        <div className="profile-capes">
          <ProfileCapeList
            capes={props.player.capes}
            selectCape={(cape) => {
              setIsPopupOpen(true);
              setSelectedCape(cape);
            }}
          />
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
