import { useEffect, useRef } from "react";
import "./SkinCanvas.css";

export const SkinCanvas = (props: {
  skinUrl: string;
  slim: boolean;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = props.skinUrl;

    img.onload = () => {
      ctx.clearRect(0, 0, 16, 32);

      // Head
      ctx.drawImage(img, 8, 8, 8, 8, 4, 0, 8, 8);
      ctx.drawImage(img, 40, 8, 8, 8, 4, 0, 8, 8);
      // Body
      ctx.drawImage(img, 20, 20, 8, 12, 4, 8, 8, 12);
      ctx.drawImage(img, 20, 36, 8, 12, 4, 8, 8, 12);

      if (props.slim) {
        // Left Arm
        ctx.drawImage(img, 44, 20, 3, 12, 1, 8, 3, 12);
        ctx.drawImage(img, 44, 36, 3, 12, 1, 8, 3, 12);

        // Right Arm
        ctx.drawImage(img, 36, 52, 3, 12, 12, 8, 3, 12);
        ctx.drawImage(img, 52, 52, 3, 12, 12, 8, 3, 12);
      } else {
        // Left Arm
        ctx.drawImage(img, 44, 20, 4, 12, 0, 8, 4, 12);
        ctx.drawImage(img, 44, 36, 4, 12, 0, 8, 4, 12);

        // Old Arm
        drawFlipped(ctx, img, 44, 20, 12, 8, 4, 12, true);

        // Right Arm
        ctx.drawImage(img, 38, 52, 4, 12, 12, 8, 4, 12);
        ctx.drawImage(img, 50, 52, 4, 12, 12, 8, 4, 12);
      }

      // Left Leg
      ctx.drawImage(img, 4, 20, 4, 12, 4, 20, 4, 12);
      ctx.drawImage(img, 4, 36, 4, 12, 4, 20, 4, 12);

      // Old Leg
      drawFlipped(ctx, img, 4, 20, 8, 20, 4, 12, true);

      // Right Leg
      ctx.drawImage(img, 20, 52, 4, 12, 8, 20, 4, 12);
      ctx.drawImage(img, 4, 52, 4, 12, 8, 20, 4, 12);
    };
  }, [props.skinUrl, props.slim]);

  return (
    <canvas
      className={"skin-canvas " + props.className}
      width={16}
      height={32}
      ref={canvasRef}
      style={{ width: "16", height: "32", imageRendering: "pixelated" }}
    ></canvas>
  );
};

function drawFlipped(
  ctx: CanvasRenderingContext2D,
  img: CanvasImageSource,
  sx: number,
  sy: number,
  dx: number,
  dy: number,
  width: number,
  height: number,
  flipH: boolean = false,
  flipV: boolean = false
): void {
  ctx.save();
  ctx.translate(dx + width / 2, dy + height / 2);
  ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  ctx.drawImage(
    img,
    sx,
    sy,
    width,
    height,
    -width / 2,
    -height / 2,
    width,
    height
  );
  ctx.restore();
}
