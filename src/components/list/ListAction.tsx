import classNames from "classnames";
import React from "react";
export interface ListActionI {
  as?: string;
  children: any;
  active?: boolean;
  disabled?: boolean;
  href: string;
}
const ListAction = React.forwardRef((props: ListActionI, ref) => {
  const {
    as: Component = "a",
    children,
    active = false,
    disabled = false,
    href,
  } = props;
  const listActionClass = classNames({
    "list-item": true,
    "list-action": true,
    active: active,
    disabled: disabled,
  });
  return (
    <Component ref={ref} className={listActionClass} href={href}>
      {children}
    </Component>
  );
});

export default ListAction;
