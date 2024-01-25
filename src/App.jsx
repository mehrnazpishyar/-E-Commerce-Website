import "./App.scss";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider"
import Main from './components/Main/Main'
import Info from './components/Info/Info'
import Testimonial from './components/Testimonial/Testimonial'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

function App() {
  return <div>
  <Header/>
  <Slider/>
  <Main/>
  <Info/>
  <Testimonial/>
  <FAQ/>
  <Footer/>
  </div>;
}

export default App;
