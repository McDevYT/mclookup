import { CapeCanvas } from "../skin-displayer/CapeCanvas";
import "./ProfileCapeList.css";

export const ProfileCapeList = (props: {
  capes: { title: string; type: string; url: string }[];
}) => {
  console.log(props.capes);
  return (
    <div className="profile-cape-list-label">
      <p>Capes</p>
      <div className="profile-cape-list">
        {props.capes.map((cape) => (
          <CapeCanvas
            key={cape.type}
            className="profile-cape-list-cape"
            capeUrl={cape.url}
          />
        ))}
      </div>
    </div>
  );
};
