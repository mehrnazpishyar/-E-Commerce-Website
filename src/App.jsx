import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts/AllProducts";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Home from "./components/Home/Home";
import { Toaster } from "react-hot-toast";
import AppProvider from "./components/context/AppProvider";
import Favorite from "./components/Favorite/Favorite";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <AppProvider>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllProducts />} />
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
