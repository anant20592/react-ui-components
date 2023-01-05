import classNames from "classnames";
import React from "react";

export interface CardHeaderI {
  as?: any;
  children: any;
}

const CardHeader = (props: CardHeaderI) => {
  const { as: Component = "div", children } = props;
  const cardHeaderClassName = classNames({
    "card-header": true,
  });
  return <Component className={cardHeaderClassName}>{children}</Component>;
};

export default CardHeader;
