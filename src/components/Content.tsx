import { ReactNode } from "react";
import { css } from "otion";
import Navbar from "./Navbar";

export interface ContentProps {
  children?: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        padding: 16,
      })}
    >
      <Navbar />
      {children}
    </main>
  );
};

export default Content;
