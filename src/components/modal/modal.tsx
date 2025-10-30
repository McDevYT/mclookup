import "./Modal.css";

export const Modal = (props: {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}) => {

  return (
    <div
      className={`modal ${props.isOpen ? "open" : ""}`}
    >
      <div className="modal-header">
        <h1>{props.title}</h1>
        <button onClick={props.onClose}>Close</button>
      </div>
      <div className="modal-content">{props.children}</div>
    </div>
  );
};
