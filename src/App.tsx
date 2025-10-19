import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Navbar } from "./components/navbar/Navbar";
import { Background } from "./components/background/Background";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="page-holder">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:username" element={<Home />} />
            <Route path="/capes/:username" element={<Home />} />
            <Route path="/faq/:username" element={<Home />} />
          </Routes>
        </div>
        <Background />
      </BrowserRouter>
    </>
  );
}

export default App;
