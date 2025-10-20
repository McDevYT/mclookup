import "./CopyableFormLabel.css";

export const CopyableFormLabel = (props: { label: string; value: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.value);
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

        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};
