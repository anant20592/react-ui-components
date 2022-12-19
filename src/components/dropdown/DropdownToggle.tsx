import classNames from "classnames";
import React, { useContext, useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import DropdownContext from "./DropdownContext";
const DropdownToggle = React.forwardRef((props, ref) => {
  const { as: Component = "div", children, className } = props;
  const { setToggle, toggle } = useContext(DropdownContext);
  const dropdownToggleClasses = classNames({
    "rui-dropdown-toggle": true,
    className,
  });
  const handleDropdown = () => {
    setToggle(!toggle);
  };
  return (
    <Component
      ref={ref}
      className={dropdownToggleClasses}
      onClick={handleDropdown}
    >
      <div className="rui-dropdown-label">{children}</div>
      <KeyboardArrowDown />
    </Component>
  );
});

export default DropdownToggle;
