import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./squezeBox.scss";

const SquezeBox = (props) => {
  return (
    <Accordion className="accordion accordion__general" allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="accordion__general-button">
            <h3>{props.heading}</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p className="accordion__description">{props.description}</p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SquezeBox;
