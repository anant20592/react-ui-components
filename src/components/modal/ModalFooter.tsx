import classNames from "classnames";
import React from "react";
export interface ModalFooterI {
  as?: string;
  children: any;
}
const ModalFooter = React.forwardRef((props: ModalFooterI, ref) => {
  const { as: Component = "div", children } = props;
  const modalFooterClass = classNames({
    "modal-footer": true,
  });
  return (
    <Component ref={ref} className={modalFooterClass}>
      {children}
    </Component>
  );
});

export default ModalFooter;
