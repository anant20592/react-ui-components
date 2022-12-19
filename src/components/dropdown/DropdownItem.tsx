import classNames from "classnames";
import React from "react";

const DropdownItem = React.forwardRef((props, ref) => {
  const { as: Component = "li", children, className, href } = props;
  const dropdownItemClasses = classNames({
    item: true,
    className,
  });
  return (
    <Component ref={ref} className={dropdownItemClasses}>
      <a href={href}>{children}</a>
    </Component>
  );
});

export default DropdownItem;
