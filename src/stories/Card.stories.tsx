import React from "react";
import Card from "../components/card/Card";
import pic from "./assets/repo.svg";

export default {
  title: "Base/Card",
  component: Card,
};

const Template = (args: any) => <Card {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: <Card.Body>This is a card body.</Card.Body>,
};

export const CardWithTitle = Template.bind({});
CardWithTitle.args = {
  children: (
    <Card.Body>
      <Card.Title>Card Title</Card.Title>Some quick example text to build on the
      card title and make up the bulk of the card's content.
    </Card.Body>
  ),
};

export const CardWithImage = Template.bind({});
CardWithImage.args = {
  children: (
    <>
      <Card.Image src={pic} alt={"Sample pic"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>Some quick example text to build on
        the card title and make up the bulk of the card's content.
      </Card.Body>
    </>
  ),
};

export const CardWithHeader = Template.bind({});
CardWithHeader.args = {
  children: (
    <>
      <Card.Header>This is a card header.</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>Some quick example text to build on
        the card title and make up the bulk of the card's content.
      </Card.Body>
    </>
  ),
};

export const CardWithTextAlign = Template.bind({});
CardWithTextAlign.args = {
  children: (
    <>
      <Card.Header>This is a card header.</Card.Header>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>Some quick example text to build on
        the card title and make up the bulk of the card's content.
      </Card.Body>
    </>
  ),
  className: "text-center",
};
