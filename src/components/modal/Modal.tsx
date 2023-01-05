import classNames from "classnames";
import React from "react";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
export interface ModalI {
  as?: string;
  children: any;
}
const Modal = React.forwardRef((props: ModalI, ref) => {
  const { as: Component = "div", children } = props;
  const modalClass = classNames({
    modal: true,
  });
  return (
    <Component ref={ref} className={modalClass}>
      <div className="modal-dialog">
        <div className="modal-content">{children}</div>
      </div>
    </Component>
  );
});

export default Object.assign(Modal, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
