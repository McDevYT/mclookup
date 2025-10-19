import { SkinCanvas } from "./SkinCanvas";

export const SkinDisplayer = (_props: {
  username: string;
  className?: string;
}) => {
  return (
    <div>
      <SkinCanvas
        className="skin-canvas"
        skinUrl="http://textures.minecraft.net/texture/67659979e4868f054c3f6103c11918ee9f1221385658ca7181f9983d31fcb3e1"
        slim={true}
      />
    </div>
  );
};
