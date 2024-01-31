
// import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Info from "./components/Info/Info";
import FAQ from "./components/FAQ/Accordion";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Products from './components/Products/Products'
import { Route, Routes} from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import DownloadApp from "./components/DownloadApp/DownloadApp";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Routes>
      <Route path="/" element={<Products />} />
        <Route path="all" element={<AllProducts />} />
        <Route path="download" element={<DownloadApp />} />
      </Routes>
      <Info />
      <FAQ />
      <Footer />
   
    
    </>
  );
}

export default App;
