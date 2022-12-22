import { height, width } from "@mui/system";
import classNames from "classnames";
import React from "react";
export interface AvatarI {
  src: string;
  alt?: string;
  size: 12 | 24 | 32 | 48 | 60;
  variant?: "default" | "circular";
}
const Avatar = (props: AvatarI) => {
  const {
    src,
    alt = "this is an avatar",
    size = 24,
    variant = "default",
  } = props;
  const avatarClassName = classNames({
    "rui-avatar": variant === "default",
    "rui-avatar-circular": variant === "circular",
  });
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={avatarClassName}
    />
  );
};

export default Avatar;
