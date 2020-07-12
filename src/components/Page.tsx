import { ReactNode } from "react";
import { css } from "otion";

export interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      {children}
    </div>
  );
};

export default Page;
