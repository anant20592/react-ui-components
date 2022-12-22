import classNames from "classnames";
import React from "react";

export interface CardTitleI {
  as?: any;
  children: any;
}

const CardTitle = (props: CardTitleI) => {
  const { as: Component = "h5", children } = props;
  const cardTitleClassName = classNames({
    "card-title": true,
  });
  return <Component className={cardTitleClassName}>{children}</Component>;
};

export default CardTitle;
