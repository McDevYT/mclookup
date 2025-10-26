import { Modal } from "../modal/modal";
import "./Impressum.css";

export const Impressum = (props: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} title="Impressum">
      <div className="impressum">
        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> support@mclookup.com <br />
          <strong>Phone:</strong> 567-8901
          <br />
          <strong>Adress:</strong> 123 Block-Host St, Gamertown, USA
          <br />
          All rights reserved. Not affiliated with Mojang, Microsoft or
          Minecraft
          <br />
        </p>
      </div>
    </Modal>
  );
};
