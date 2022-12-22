import React, { CSSProperties } from "react";
import type * as CSS from "csstype";

export interface ButtonI {
  backgroundColor: CSS.Property.BackgroundColor | undefined;
  primary: boolean;
  size: "small" | "medium" | "large";
  onClick?: () => void;
  label: string;
}
export const Button = ({
  primary = false,
  backgroundColor,
  size = "medium",
  label,
  ...props
}: ButtonI) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const styles: CSSProperties = { backgroundColor };
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={styles}
      {...props}
    >
      {label}
    </button>
  );
};
