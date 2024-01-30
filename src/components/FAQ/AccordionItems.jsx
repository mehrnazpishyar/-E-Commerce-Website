import { IoIosArrowDropdown } from "react-icons/io";


const AccordionItems = ({ title, description, active, setActive }) => {

    const handleClick = () => {
        // Toggle the show class by calling setActive with the opposite state
        setActive((prevActive) => (prevActive === title ? "" : title));
      };
  return (
    <div className="single-container" onClick={handleClick}>
      <span className={`heading ${active === title && "activeTitle"}`}>
        {title}
        <span className="headingIcon">
     
          <IoIosArrowDropdown className={`icon ${active === title && "rotate"}`} />
       
     
        </span>
       
      </span>
      <p className={` description ${active === title ? "show" : ""} `}>
        {description}
      </p>
    </div>
  );
};

export default AccordionItems;
