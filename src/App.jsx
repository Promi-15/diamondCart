import { BrowserRouter } from "react-router-dom";
import Navbar from "./Shared.jsx/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Home></Home>
      
    </BrowserRouter>
  );
}

export default App;
