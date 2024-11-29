import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Shared.jsx/Navbar";
import Home from "./Pages/Home";
import AllCategories from "./Pages/AllCategories";
import Rings from "./Pages/Rings";
import Crown from "./Pages/Crown";
import Necklace from "./Pages/Necklace";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allCate" element={<AllCategories />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/crown" element={<Crown />} />
        <Route path="/necklace" element={<Necklace />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
