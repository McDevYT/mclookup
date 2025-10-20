import type { Player } from "../../scripts/types";
import { CopyableFormLabel } from "../copyable-form-label/CopyableFormLabel";
import { ProfileCapeList } from "../profile-cape-list/ProfileCapeList";
import { SkinCanvas } from "../skin-displayer/SkinCanvas";
import "./Profile.css";

export const Profile = (props: { player: Player }) => {
  return (
    <div className="profile">
      <div className="profile-skinviewer">
        <SkinCanvas
          className="profile-skincanvas"
          skinUrl={props.player.skin}
          slim={props.player.model === "slim"}
        />
      </div>
      <div className="profile-stats">
        <h1>{props.player.name}</h1>
        <CopyableFormLabel label="UUID" value={props.player.uuid} />
        <CopyableFormLabel
          label="Head command"
          value={`/give @p minecraft:player_head[profile={name:"${props.player.name}"}]`}
        />
        <div className="profile-capes">
          <ProfileCapeList capes={props.player.capes} />
        </div>
      </div>
    </div>
  );
};
