import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
// import AllProducts from "./components/AllProducts/AllProducts";
// import DownloadApp from "./components/DownloadApp/DownloadApp";
import Home from "./components/Home/Home";
import AllProducts from "./components/AllProducts/AllProducts";
import DownloadApp from "./components/DownloadApp/DownloadApp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/all" element={  <AllProducts/>}/>
        <Route path="/download" element={  <DownloadApp/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
