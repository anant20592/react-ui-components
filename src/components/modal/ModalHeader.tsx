import classNames from "classnames";
import React from "react";
export interface ModalHeaderI {
  as?: string;
  children: any;
}
const ModalHeader = React.forwardRef((props: ModalHeaderI, ref) => {
  const { as: Component = "div", children } = props;
  const modalHeaderClass = classNames({
    "modal-header": true,
  });
  return (
    <Component ref={ref} className={modalHeaderClass}>
      {children}
    </Component>
  );
});

export default ModalHeader;
