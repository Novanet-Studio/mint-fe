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
      <Accordion
        className="accordion accordion__filters"
        allowZeroExpanded={true}
      >
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h4 className="accordion__title">Filters</h4>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <Accordion
              className="accordion accordion__filters"
              allowZeroExpanded={true}
            >
              {props.filters.map(function (item) {
                return (
                  <AccordionItem key={item.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <h5 className="accordion__subtitle">{item.title}</h5>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <form className="form filters__form">
                        {item.group.map(function (element) {
                          return (
                            <div key={element.id}>
                              <input
                                type="checkbox"
                                id={element.id}
                                name={element.name}
                                value={element.name}
                              />
                              <label htmlFor="vehicle1">{element.name}</label>
                            </div>
                          );
                        })}
                      </form>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
              <button className="button button__action--outline filters__button">
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
