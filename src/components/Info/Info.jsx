import pic from "../../../public/online.jpg";
import { useEffect, useState } from "react";

const Info = () => {
  const [leftToRight, setLeftToRight] = useState(false);
  const [rightToLeft, setRightToLeft] = useState(false);
  const [topToBottom, setTopToBottom] = useState(false);
  const [popup, setPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const mainLeft = document.querySelector(".left");
      const mainRight = document.querySelector(".right");
      const mainTop = document.querySelector(".title");
      const windowHeight = window.innerHeight;
      const revealPoint = 200;

      // Left to Right animation
      const leftTop = mainRight.getBoundingClientRect().top;
      if (revealPoint < windowHeight - leftTop) {
        setLeftToRight(true);
      } else {
        setLeftToRight(false);
      }

      // Right to Left animation
      const rightTop = mainLeft.getBoundingClientRect().top;
      if (revealPoint < windowHeight - rightTop) {
        setRightToLeft(true);
      } else {
        setRightToLeft(false);
      }

      // Top to Bottom animation
      const topBottom = mainTop.getBoundingClientRect().top;
      if (revealPoint < windowHeight - topBottom) {
        setTopToBottom(true);
      } else {
        setTopToBottom(false);
      }

      // Popup animation
      const popupTop = mainLeft.getBoundingClientRect().top;
      if (revealPoint < windowHeight - popupTop) {
        setPopup(true);
      } else {
        setPopup(false);
      }

      // Fade Out animation
      const fadeOutTop = mainTop.getBoundingClientRect().top;
      if (revealPoint < windowHeight - fadeOutTop) {
        setFadeOut(true);
      } else {
        setFadeOut(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="info-section container">
      <h2 className={`title ${topToBottom ? "topToBottom" : ""}`}>
        product information
      </h2>
      <div className="main">
        <div className={`left ${leftToRight ? "leftToRight" : ""}`}>
          <img src={pic} alt="" />
        </div>
        <div className={`right ${rightToLeft ? "rightToLeft" : ""}`}>
          <h3>Welcome to our Online Shop!</h3>
          <p>
          Your Ultimate Online Shopping Destination. At our Online Shop, we bring you a curated selection of high-quality products that combine style, functionality, and affordability. Our online store is your one-stop destination for all your needs, offering a diverse range of products that cater to different tastes and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
