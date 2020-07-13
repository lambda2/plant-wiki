import { ReactNode } from "react";
import { css } from "otion";

export interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridColumnGap: 32,
        gridRowGap: 32,
        width: "100%",
        maxWidth: 1260,
        alignSelf: "center",
        "@media": {
          "(max-width: 1260px)": {
            gridTemplateColumns: "repeat(2, auto)",
            gridColumnGap: 24,
            gridRowGap: 24,
          },
          "(max-width: 768px)": {
            gridTemplateColumns: "repeat(1, auto)",
            gridRowGap: 16,
          },
        },
      })}
    >
      {children}
    </div>
  );
};

export default Grid;
