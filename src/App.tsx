import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import { Background } from "./components/background/Background";
import { StrictMode } from "react";
import { Search } from "./pages/search/Search";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Capes } from "./pages/capes/Capes";
import { FAQ } from "./pages/faq/FAQ";

function App() {
  return (
    <>
      <StrictMode>
        <HashRouter>
          <Navbar />
          <div className="page-holder">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/:searchterm" element={<Search />} />
              <Route path="/capes/" element={<Capes />} />
              <Route path="/faq/" element={<FAQ />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </div>
          <Background />
        </HashRouter>
      </StrictMode>
    </>
  );
}

export default App;
