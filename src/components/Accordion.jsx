// eslint-disable-next-line react/prop-types

import { useState } from "react";

import AccordionItem from "./AccordionItem";

function Accordion({data}) {

    const [ currOpen , setCurrOpen ] = useState(null);

  
    return (
       <div className="accordion">
           {data.map((item, index) => (
                <AccordionItem key={index} num={index} title={item.title} currOpen={currOpen} onOpen={setCurrOpen}>{item.text}</AccordionItem>
           ))}
       </div>
    )
}

export default Accordion;   