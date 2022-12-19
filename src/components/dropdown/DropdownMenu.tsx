import classNames from "classnames";
import React, { useContext } from "react";
import DropdownContext from "./DropdownContext";

const DropdownMenu = React.forwardRef((props, ref) => {
  const { as: Component = "ol", children, className } = props;
  const { toggle } = useContext(DropdownContext);
  const dropdownMenuClasses = classNames({
    "rui-dropdown-list": true,
    show: toggle,
    className,
  });
  return (
    <Component ref={ref} className={dropdownMenuClasses}>
      {children}
    </Component>
  );
});

export default DropdownMenu;
