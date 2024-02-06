import Info from "../Info/Info";
import Products from "../Products/Products";
import FAQ from "../FAQ/Accordion";
import Benefits from "../Benefits/Benefits";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Info />
      <Benefits />
      <FAQ />
    </div>
  );
};

export default Home;
