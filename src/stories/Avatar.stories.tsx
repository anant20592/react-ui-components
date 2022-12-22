import React from "react";
import Avatar, { AvatarI } from "../components/avatar/Avatar";
import profile from "./assets/linkedin_profile.jpg";

export default {
  title: "LinkedIn/Avatar",
  component: Avatar,
};
const Template = (args: AvatarI) => <Avatar {...args} />;
export const Default = Template.bind({});

Default.args = {
  src: profile,
  alt: "Avatar",
};

export const Circular = Template.bind({});
Circular.args = {
  ...Default.args,
  variant: "circular",
};
