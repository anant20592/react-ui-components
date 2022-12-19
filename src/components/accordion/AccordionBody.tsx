import classNames from "classnames";
import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import AccordionItemContext from "./AccordionItemContext";

const AccordionBody = React.forwardRef((props, ref) => {
  const { children, as: Component = "div", className } = props;
  const { eventKey } = useContext(AccordionItemContext);
  const { activeKey } = useContext(AccordionContext);
  console.log(eventKey, "- ", activeKey);
  const accordionBodyClass = classNames({
    "rui-accordion-body": true,
    "rui-accordion-collapse": true,
    show: activeKey === eventKey,
  });

  return (
    <Component ref={ref} className={accordionBodyClass + " " + className}>
      {children}
    </Component>
  );
});

export default AccordionBody;
