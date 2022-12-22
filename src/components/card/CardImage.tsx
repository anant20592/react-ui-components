import classNames from "classnames";
import React from "react";

export interface CardImageI {
  as?: any;
  src: string;
  alt?: string;
}

const CardImage = (props: CardImageI) => {
  const { as: Component = "img", src, alt } = props;
  const cardImageClassName = classNames({
    "card-img-top": true,
  });
  return (
    <Component
      className={cardImageClassName}
      width={"100%"}
      src={src}
      alt={alt}
    />
  );
};

export default CardImage;
