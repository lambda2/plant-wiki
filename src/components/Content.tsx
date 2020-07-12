import { ReactNode } from "react";
import { css } from "otion";

export interface ContentProps {
  children?: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: 16,
      })}
    >
      {children}
    </main>
  );
};

export default Content;
