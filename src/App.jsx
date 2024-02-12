import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Home from "./components/Home/Home";
import AppProvider from "./components/context/AppProvider";
import Favorite from "./components/Favorite/Favorite";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Man from "./components/Man/Man";
import Woman from "./components/Woman/Woman";
import Jewellery from "./components/Jewellery/Jewellery";
import Electronics from "./components/Electronics/Electronics";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/categories/woman" element={<Woman />} />
        <Route path="/categories/man" element={<Man />} />
        <Route path="/categories/jewellery" element={<Jewellery />} />
        <Route path="/categories/electronics" element={<Electronics />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
