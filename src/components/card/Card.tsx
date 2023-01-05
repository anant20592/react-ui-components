import classNames from "classnames";
import React from "react";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
export interface CardI {
  as: any;
  children: any;
  className?: string;
}

const Card = (props: CardI) => {
  const { as: Component = "div", children, className } = props;
  const cardClassName = classNames("card", className);
  return <Component className={cardClassName}>{children}</Component>;
};

export default Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage,
  Header: CardHeader,
});
