import classNames from "classnames";
import React from "react";
export interface ListItemI {
  as?: string;
  children: any;
  active?: boolean;
  disabled?: boolean;
}
const ListItem = React.forwardRef((props: ListItemI, ref) => {
  const {
    as: Component = "li",
    children,
    active = false,
    disabled = false,
  } = props;
  const listItemClass = classNames({
    "list-item": true,
    active: active,
    disabled: disabled,
  });
  return (
    <Component ref={ref} className={listItemClass}>
      {children}
    </Component>
  );
});

export default ListItem;
