import { ReactNode } from "react";
import { css } from "otion";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul
        className={css({
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          justifyContent: "space-between",
          padding: "0",
        })}
      >
        <li>
          <Link href="/">
            <div
              className={css({
                backgroundImage: "url(/logo.svg)",
                height: "20px",
                width: "50px",
                backgroundRepeat: "no-repeat",
                flex: "1",
              })}
            ></div>
          </Link>
        </li>
        <li>
          <Link href="/793131">
            <div
              className={css({
                backgroundImage: "url(/randomize.svg)",
                height: "25px",
                width: "50px",
                backgroundRepeat: "no-repeat",
              })}
            ></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
