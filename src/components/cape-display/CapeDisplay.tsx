import { CapeCanvas } from "../skin-displayer/CapeCanvas";
import "./CapeDisplay.css";

export const CapeDisplay = (props: {
  capeUrl: string;
  className?: string;
  type: string;
  title: string;
  selectCape: () => void;
}) => {
  return (
    <div className="cape-display" onClick={props.selectCape}>
      <CapeCanvas
        onClick={props.selectCape}
        capeUrl={props.capeUrl}
        className="cape-display-canvas"
        key={props.type}
      />
      <h4>{props.title}</h4>
    </div>
  );
};
