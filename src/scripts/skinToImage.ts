const PARTS = {
  head: { x: 8, y: 8, w: 8, h: 8 },
  headOverlay: { x: 40, y: 8, w: 8, h: 8 },
  body: { x: 20, y: 20, w: 8, h: 12 },
  bodyOverlay: { x: 20, y: 36, w: 8, h: 12 },
  leftArm: { x: 44, y: 20, w: 4, h: 12 },
  leftArmOverlay: { x: 44, y: 36, w: 4, h: 12 },
  rightArm: { x: 36, y: 52, w: 4, h: 12 },
  rightArmOverlay: { x: 52, y: 52, w: 4, h: 12 },
  leftLeg: { x: 4, y: 20, w: 4, h: 12 },
  leftLegOverlay: { x: 4, y: 36, w: 4, h: 12 },
  rightLeg: { x: 20, y: 52, w: 4, h: 12 },
  rightLegOverlay: { x: 4, y: 52, w: 4, h: 12 },
};

export function drawMinecraftSkin(
  skinUrl: string,
  scale: number = 8
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  canvas.style.width = `${canvas.width * scale}px`;
  canvas.style.height = `${canvas.height * scale}px`;

  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingEnabled = false;

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = skinUrl;

  img.onload = () => {
    // --- HEAD ---
    ctx.drawImage(img, 8, 8, 8, 8, 24, 0, 16, 16);

    // --- BODY ---
    ctx.drawImage(img, 20, 20, 8, 12, 24, 16, 16, 24);

    // --- ARMS ---
    // Right arm
    ctx.drawImage(img, 44, 20, 4, 12, 16, 16, 8, 24);
    // Left arm (mirrored from right arm for classic skin)
    ctx.drawImage(img, 36, 52, 4, 12, 40, 16, 8, 24);

    // --- LEGS ---
    // Right leg
    ctx.drawImage(img, 4, 20, 4, 12, 24, 40, 8, 24);
    // Left leg
    ctx.drawImage(img, 20, 52, 4, 12, 32, 40, 8, 24);
  };

  return canvas;
}
