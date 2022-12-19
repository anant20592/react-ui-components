import React, { useContext, useState } from "react";
import "./dropdown.scss";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";
import classNames from "classnames";
import DropdownContext from "./DropdownContext";
const Dropdown = React.forwardRef((props, ref) => {
  const { children, className, as: Component = "div" } = props;
  const [toggle, setToggle] = useState(false);
  const dropdownClasses = classNames({
    "rui-dropdown-container": true,
  });
  //const {} = useContext(dropdownContext);
  return (
    <DropdownContext.Provider value={{ toggle, setToggle }}>
      <Component className={dropdownClasses} ref={ref}>
        {children}
      </Component>
    </DropdownContext.Provider>
  );
});

export default Object.assign(Dropdown, {
  Item: DropdownItem,
  Menu: DropdownMenu,
  Toggle: DropdownToggle,
});
