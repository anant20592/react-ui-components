import classNames from "classnames";
import React from "react";
export interface ModalBodyI {
  as?: string;
  children: any;
}
const ModalBody = React.forwardRef((props: ModalBodyI, ref) => {
  const { as: Component = "div", children } = props;
  const modalBodyClass = classNames({
    "modal-body": true,
  });
  return (
    <Component ref={ref} className={modalBodyClass}>
      {children}
    </Component>
  );
});

export default ModalBody;
