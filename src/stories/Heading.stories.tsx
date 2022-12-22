import React from "react";
import Heading, { HeadingI } from "../components/heading/Heading";

export default {
  title: "LinkedIn/Heading",
  component: Heading,
};
const Template = (args: HeadingI) => <Heading {...args} />;
export const Default = Template.bind({});

Default.args = {
  text: "This is a heading",
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  ...Default.args,
  variant: "with-badge",
};

export const Link = Template.bind({});
Link.args = {
  ...Default.args,
  //variant: "with-badge",
  href: "https://www.google.com",
};
