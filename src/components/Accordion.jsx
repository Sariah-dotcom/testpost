import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Accordion(props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  function toggleAccordion() {
    setAccordionOpen(prev => !prev);
  }

  return (
    <div>
      <div
        className="flex items-center justify-between mb-2 cursor-pointer" onClick={toggleAccordion}>
        <h4 className={`uppercase font-semibold text-sm transition-colors duration-300 ${accordionOpen ? 'text-[#0016AE]' : 'text-[#383838]'}`}>
          {props.heading}
        </h4>
        <MdKeyboardArrowDown
          className={`transition-all duration-300 ${
            accordionOpen ? 'rotate-180 text-[#0016AE]' : ''
          }`}
        />
      </div>

      {accordionOpen && (
        <p className="py-2">{props.content}</p>
      )}

      <hr className="text-[#D9D9D9]" />
    </div>
  );
}
