import React from "react";
const DropdownContext = React.createContext({
  toggle: false,
  setToggle: () => {},
});

export default DropdownContext;
