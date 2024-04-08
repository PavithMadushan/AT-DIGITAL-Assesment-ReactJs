import Accordion from "./Accordion";
import { useState } from "react";

const Accordionaction = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      data: `Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
			Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.`,
      isOpen: false,
    },
    {
      key: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      data: `Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
			Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.`,
      isOpen: false,
    },
    {
      key: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      data: `Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
			Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.`,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <div className="p-2 m-8">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.key}
            title={accordion.title}
            data={accordion.data}
            isOpen={accordion.isOpen}
            toggleAccordion={() => toggleAccordion(accordion.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordionaction;
