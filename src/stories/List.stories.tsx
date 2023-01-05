import React from "react";
import List from "../components/list/List";

export default {
  title: "Base/List",
  component: List,
};

const Template = (args: any) => <List {...args} />;
export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <List.Item>List item 1.</List.Item>
      <List.Item>List item 2.</List.Item>
    </>
  ),
};

export const ListWithActiveItem = Template.bind({});
ListWithActiveItem.args = {
  children: (
    <>
      <List.Item active>List item 1.</List.Item>
      <List.Item>List item 2.</List.Item>
    </>
  ),
};

export const ListWithDisabledItem = Template.bind({});
ListWithDisabledItem.args = {
  children: (
    <>
      <>
        <List.Item disabled>List item 1.</List.Item>
        <List.Item>List item 2.</List.Item>
      </>
    </>
  ),
};

export const ListWithAction = Template.bind({});
ListWithAction.args = {
  children: (
    <>
      <List.Action href="#" active>
        List item 1.
      </List.Action>
      <List.Action href="#" disabled>
        List item 2.
      </List.Action>
      <List.Action href="#">List item 3.</List.Action>
    </>
  ),
};

// export const CardWithTextAlign = Template.bind({});
// CardWithTextAlign.args = {
//   children: (
//     <>
//       <Card.Header>This is a card header.</Card.Header>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>Some quick example text to build on
//         the card title and make up the bulk of the card's content.
//       </Card.Body>
//     </>
//   ),
//   className: "text-center",
// };
