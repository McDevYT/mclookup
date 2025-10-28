import { useEffect, useRef } from "react";
import "./SkinCanvas.css";

export const CapeCanvas = (props: {
  capeUrl: string;
  className?: string;
  onClick: () => void;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = props.capeUrl;

    img.onload = () => {
      ctx.drawImage(img, 1, 1, 10, 16, 0, 0, 10, 16);
    };
  }, [props.capeUrl]);

  return (
    <canvas
      onClick={props.onClick}
      className={"cape-canvas " + props.className}
      width={10}
      height={16}
      ref={canvasRef}
      style={{ width: "16", height: "32", imageRendering: "pixelated" }}
    ></canvas>
  );
};
