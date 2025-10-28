import type { Cape, PlayerCape } from "../../scripts/types";
import { Modal } from "../modal/modal";
import { CapeCanvas } from "../skin-displayer/CapeCanvas";
import "./CapeModal.css";

export const CapeModal = (props: {
  isOpen: boolean;
  onClose: () => void;
  cape: Cape | PlayerCape | undefined;
}) => {
  return (
    <Modal
      title={props.cape?.title ?? "loading..."}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <div className="cape-modal">
        <CapeCanvas
          onClick={() => {}}
          className="cape-modal-canvas"
          capeUrl={props.cape?.url ?? ""}
        />
        <div>
          <h1>{props.cape?.title ?? "loading..."}</h1>
          <p>{props.cape?.description ?? "loading..."}</p>
        </div>
      </div>
    </Modal>
  );
};
