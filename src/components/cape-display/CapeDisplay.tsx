import { CapeCanvas } from "../skin-displayer/CapeCanvas";
import "./CapeDisplay.css";

export const CapeDisplay = (props: {
  capeUrl: string;
  className?: string;
  type: string;
  description: string;
  title: string;
}) => {
  return (
    <div className="cape-display">
      <CapeCanvas
        capeUrl={props.capeUrl}
        className="cape-display-canvas"
        key={props.type}
      />
    </div>
  );
};
