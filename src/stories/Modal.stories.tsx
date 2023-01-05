import React from "react";
import Modal from "../components/modal/Modal";

export default {
  component: Modal,
  title: "Base/Modal",
};

const Template = (args: any) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Modal.Header>
        <h1>Modal title</h1>
      </Modal.Header>
      <Modal.Body>
        <p>This is a modal body</p>
      </Modal.Body>
      <Modal.Footer>
        <p>This is a modal footer</p>
      </Modal.Footer>
    </>
  ),
};
