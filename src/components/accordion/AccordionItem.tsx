import classNames from "classnames";
import React, { useMemo } from "react";
import AccordionItemContext from "./AccordionItemContext";

const AccordionItem = React.forwardRef((props, ref) => {
  const { children, as: Component = "div", eventKey } = props;
  const accordionItemClass = classNames({
    "rui-accordion-item": true,
  });

  const handleContext = useMemo(
    () => ({
      eventKey: eventKey,
    }),
    [eventKey]
  );
  return (
    <AccordionItemContext.Provider value={handleContext}>
      <Component ref={ref} className={accordionItemClass}>
        {children}
      </Component>
    </AccordionItemContext.Provider>
  );
});

export default AccordionItem;
