import { CopyableFormLabel } from "../copyable-form-label/CopyableFormLabel";
import { ProfileCapeList } from "../profile-cape-list/ProfileCapeList";
import "./ProfileLoader.css";

export const ProfileLoader = () => {
  return (
    <div className="profile-loader">
      <div className="profile-loader-skinviewer">
        <div className="profile-loader-skincanvas" />
      </div>
      <div className="profile-loader-stats">
        <h1>Loading....</h1>
        <CopyableFormLabel label="UUID" value="Loading..." />
        <CopyableFormLabel label="Head command" value="Loading..." />
        <div className="profile-loader-capes">
          <ProfileCapeList capes={[]} selectCape={() => {}} />
        </div>
      </div>
    </div>
  );
};
