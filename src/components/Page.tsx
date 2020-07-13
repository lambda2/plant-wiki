import { ReactNode } from "react";
import { css } from "otion";

import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

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
      <Footer />
    </div>
  );
};

export default Page;
