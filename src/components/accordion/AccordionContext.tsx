import React from "react";

const AccordionContext = React.createContext({
  activeKey: "",
  setActiveKey: () => {},
});
export const isAccordionItemSelected = (
  activeKey: string,
  eventKey: string
) => {
  return activeKey === eventKey;
};
export default AccordionContext;
