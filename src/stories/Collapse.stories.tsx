import React from "react";
import Card from "../components/card/Card";
import Collapse from "../components/collapse/Collapse";

export default {
  title: "Base/Collapse",
  component: Collapse,
};

const Template = (args: any) => <Collapse {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: <Card.Body>This is a card body.</Card.Body>,
  className: "",
};
