import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from "react";
import { css } from "otion";
import clsx from "clsx";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          css({
            padding: "16px 32px",
            backgroundColor: "#A5C577",
            color: "#fff",
            borderRadius: 4,
          }),
          className
        )}
      />
    );
  }
);

export default Button;
