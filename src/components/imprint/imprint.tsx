import { Modal } from "../modal/modal";
import "./Imprint.css";

export const Imprint = (props: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} title="Imprint">
      <div className="imprint">
        <h2>Legal Notice / Imprint</h2>

        <section>
          <h3>Contact Information</h3>
          <p>
            <strong>Operator:</strong> MC Lookup
            <br />
            <strong>Email:</strong> support@mclookup.com
            <br />
            <strong>Phone:</strong> +1 567 8901
            <br />
            <strong>Address:</strong> 123 Block Host Street, Gamertown, USA
          </p>
        </section>

        <section>
          <h3>Disclaimer</h3>
          <p>
            MC Lookup is an independent project and is not affiliated with,
            endorsed by, or in any way officially connected to Mojang Studios,
            Microsoft Corporation, or the Minecraft brand.
          </p>
        </section>

        <section>
          <h3>Copyright</h3>
          <p>
            © {new Date().getFullYear()} MC Lookup. All rights reserved. All
            trademarks are the property of their respective owners.
          </p>
        </section>
      </div>
    </Modal>
  );
};
