import classNames from "classnames";
import React from "react";

export interface BadgeI {
  variant: string;
  label?: string;
  as?: string;
}
const Badge = (props: BadgeI) => {
  const { as: Component = "span", variant, label } = props;
  const badgeClassName = classNames({});
  const badgeSpanClassName = classNames({
    "rui-badge-distance": variant === "distance",
  });
  return (
    <Component className={badgeClassName}>
      <span className={badgeSpanClassName}>{label}</span>
    </Component>
  );
};

export default Badge;
