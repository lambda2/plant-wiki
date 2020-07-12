import { css } from "otion";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul
        className={css({
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
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
              })}
            ></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
