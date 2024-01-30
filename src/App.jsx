
// import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Info from "./components/Info/Info";
import FAQ from "./components/FAQ/Accordion";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Products from './components/Products/Products'

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Products/>
      <Info />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
