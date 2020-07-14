import { ReactNode } from "react";
import { css } from "otion";

export interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div
      className={css({
        padding: "8px 16px",
        border: "1px solid #9B9B9B25",
        borderRadius: 4,
        boxShadow:
          "0 4px 6px 1px #9B9B9B20, 0 1px 7px 1px #9B9B9B20, 0 2px 2px -1px #9B9B9B20",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow:
            "0 6px 8px 3px #A5C57725, 0 2px 12px 2px #A5C57725, 0 4px 4px -2px #A5C57725",
          borderColor: "#A5C57725",
        },
        textDecoration: "none",
      })}
    >
      {children}
    </div>
  );
};

export default Card;
