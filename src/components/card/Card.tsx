import classNames from "classnames";
import React from "react";
import CardBody from "./CardBody";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
export interface CardI {
  as: any;
  children: any;
}

const Card = (props: CardI) => {
  const { as: Component = "div", children } = props;
  const cardClassName = classNames({
    card: true,
  });
  return <Component className={cardClassName}>{children}</Component>;
};

export default Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage,
});
