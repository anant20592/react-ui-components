import classNames from "classnames";
import React from "react";

export interface CardBodyI {
  as?: any;
  children: any;
}

const CardBody = (props: CardBodyI) => {
  const { as: Component = "div", children } = props;
  const cardBodyClassName = classNames({
    "card-body": true,
  });
  return <Component className={cardBodyClassName}>{children}</Component>;
};

export default CardBody;
