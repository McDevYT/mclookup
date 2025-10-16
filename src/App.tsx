import "./App.css";
import { drawMinecraftSkin } from "./scripts/skinToImage";
function App() {
  document.body.appendChild(
    drawMinecraftSkin(
      "http://textures.minecraft.net/texture/67659979e4868f054c3f6103c11918ee9f1221385658ca7181f9983d31fcb3e1",
      10
    )
  );

  return (
    <>
      <img src="http://textures.minecraft.net/texture/67659979e4868f054c3f6103c11918ee9f1221385658ca7181f9983d31fcb3e1"></img>
    </>
  );
}

export default App;
