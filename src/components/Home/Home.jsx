import Info from "../Info/Info";
import Products from "../Products/Products";
import FAQ from "../FAQ/Accordion";
import Benefits from "../Benefits/Benefits";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Info />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
