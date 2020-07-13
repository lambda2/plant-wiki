import { ReactNode } from "react";
import { css } from "otion";

import NavBar from "~/components/NavBar";

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
      <NavBar />
      {children}
    </div>
  );
};

export default Page;
