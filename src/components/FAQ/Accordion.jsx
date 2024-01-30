import { useState } from "react";
import AccordionItems from "./AccordionItems";
import {FAQ} from '../../constants/index'

const Accordion = () => {
  const [active, setActive]= useState("")
  return (
    <div className="accordion">
      <h1 className="title">FAQ</h1>
      <div className="flex">
      <div className="secContainer">
        {FAQ.map((item)=>(
        <AccordionItems key={item.title} active={active} setActive={setActive} title={item.title} description={item.description}  />
        ))}
      </div>
      </div>
    
    </div>
  );
};

export default Accordion;
