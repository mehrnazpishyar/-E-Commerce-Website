import img1 from "../../../public/img1.jpg";
import img2 from "../../../public/img2.jpg";
import img3 from "../../../public/img3.jpg";
import img4 from "../../../public/img4.jpg";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="banner-container">
      <div className="banner">
        <div
          className="banner-main"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <img src={img1} alt="image" loading="priority" />
          <img src={img2} alt="image" />
          <img src={img3} alt="image" />
          <img src={img4} alt="image" />
        </div>
        <div className="arrow-section">
          <div className="arrow-left" onClick={prevSlide}>
            <HiArrowLeft />
          </div>
          <div className="arrow-right" onClick={nextSlide}>
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
