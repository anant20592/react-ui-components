import classNames from "classnames";
import React from "react";
export interface CollpaseI {
  as?: string;
  children: any;
  className: string;
}
const Collpase = React.forwardRef((props: CollpaseI, ref) => {
  const { as: Component = "div", children, className } = props;
  const collapseClass = classNames("collapse", className);
  return (
    <Component ref={ref} className={collapseClass}>
      {children}
    </Component>
  );
});

export default Object.assign(Collpase, {});
