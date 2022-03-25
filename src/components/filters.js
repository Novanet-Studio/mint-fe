import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./filters.scss";

const FilterBox = (props) => {
  return (
    <div className="filters">
      <Accordion className="accordion accordion__filters" allowZeroExpanded={true}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h4>Filters</h4>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Accordion
              className="accordion accordion__filters"
              allowZeroExpanded={true}
            >
              {props.filters.map(function (item) {
                return (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <h5>{item.title}</h5>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <form className="form filters__form">
                        {item.group.map(function (element) {
                          return (
                            <div>
                              <input
                                type="checkbox"
                                key={element.id}
                                id={element}
                                name={element}
                                value={element}
                              />
                              <label for="vehicle1">{element}</label>
                            </div>
                          );
                        })}
                      </form>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
              <button className="button button__action--outline">
                Clear filter
              </button>
            </Accordion>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterBox;
