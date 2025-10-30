import "./CopyableFormLabel.css";
import copyIcon from "../../assets/copy-icon.svg";
import checkIcon from "../../assets/check-icon.svg";
import { useState } from "react";

export const CopyableFormLabel = (props: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(props.value);
setCopied(true);
setTimeout(() => {
    setCopied(false);
}, 3000);

  };

  return (
    <div className="copyable-form-label">
      <p>{props.label}</p>
      <div className="copyable-form">
        <input
          className="copyable-form-text"
          contentEditable={false}
          readOnly
          value={props.value}
        />

        <button onClick={handleCopy}><img src={(copied)?checkIcon:copyIcon}/></button>
      </div>
    </div>
  );
};
