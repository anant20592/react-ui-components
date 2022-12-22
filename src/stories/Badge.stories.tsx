import React from "react";
import Badge, { BadgeI } from "../components/badge/Badge";

export default {
  title: "LinkedIn/Badge",
  component: Badge,
};

const Template = (args: BadgeI) => <Badge {...args} />;
export const Distance = Template.bind({});

Distance.args = {
  variant: "distance",
  label: "1st",
};
