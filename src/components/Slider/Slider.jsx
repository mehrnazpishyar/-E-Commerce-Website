import { useState } from "react";
import { CgPlayTrackPrevR } from "react-icons/cg";
import { CgPlayTrackNextR } from "react-icons/cg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      backgroundImage: "url(https://i.ibb.co/qCkd9jS/img1.jpg)",
      name: "Switzerland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      backgroundImage: "url(https://i.ibb.co/jrRb11q/img2.jpg)",
      name: "Finland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      backgroundImage: "url(https://i.ibb.co/NSwVv8D/img3.jpg)",
      name: "Finland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      backgroundImage: "url(https://i.ibb.co/Bq4Q0M8/img4.jpg)",
      name: "Finland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
    {
      backgroundImage: "url(https://i.ibb.co/jTQfmTq/img5.jpg)",
      name: "Finland",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
    },
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="slider-container">
      <div className="slide">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === currentIndex ? "active" : ""}`} style={{ backgroundImage: item.backgroundImage }}>
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="prev" onClick={handlePrevClick}>
          <CgPlayTrackPrevR />
        </button>
        <button className="next" onClick={handleNextClick}>
          <CgPlayTrackNextR />
        </button>
      </div>
    </div>
  );
}

export default Slider