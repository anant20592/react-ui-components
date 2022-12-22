import React from "react";
import classNames from "classnames";
import Badge from "../badge/Badge";
export interface HeadingI {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  variant?: "default" | "with-badge";
  link: boolean;
  href?: string;
}
const Heading = (props: HeadingI) => {
  const {
    as: Component = "h1",
    text,
    variant = "default",
    link = "false",
    href,
  } = props;
  const headingClassName = classNames({
    "rui-heading": variant === "default",
    "rui-avatar-with-badge": variant === "with-badge",
  });
  return (
    <Component className={headingClassName}>
      {link ? (
        <a href={href}>
          <span>{text}</span>
          {variant === "with-badge" && <Badge variant="distance" label="1st" />}
        </a>
      ) : (
        <>
          <span>{text}</span>
          {variant === "with-badge" && <Badge variant="distance" label="1st" />}
        </>
      )}
    </Component>
  );
};

export default Heading;
