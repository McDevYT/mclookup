import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Background } from "./components/background/Background";
import { StrictMode } from "react";
import { Search } from "./pages/search/Search";
function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <Navbar />
          <div className="page-holder">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/:searchterm" element={<Search />} />
              <Route path="/capes/" element={<Home />} />
              <Route path="/faq/" element={<Home />} />
            </Routes>
          </div>
          <Background />
        </BrowserRouter>
      </StrictMode>
    </>
  );
}

export default App;
