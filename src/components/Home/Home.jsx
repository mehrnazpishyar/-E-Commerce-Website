import Info from "../Info/Info";
import Products from "../Products/Products";
import Slider from "../Slider/Slider";
import FAQ from '../FAQ/Accordion'
import Benefits from "../Benefits/Benefits";

const Home = () => {

  return (
    <div>
      <Slider />
      <Products />
      <Info />
      <Benefits/>
      <FAQ />
    </div>
  );
};

export default Home;
