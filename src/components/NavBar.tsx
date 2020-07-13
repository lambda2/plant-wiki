import { css } from "otion";
import Link from "next/link";
import { authEndpoint } from "~/constants";

const NavBar = () => {
  return (
    <nav
      className={css({
        paddingLeft: 16,
        paddingRight: 16,
      })}
    >
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
                height: "30px",
                width: "45px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                flex: "1",
              })}
            ></div>
          </Link>
        </li>
        <li>
          <a href="https://github.com/10factory/plant-wiki" target="_blank">
            <div
              className={css({
                backgroundImage: "url(/github-branch.svg)",
                height: "30px",
                width: "30px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                flex: "1",
              })}
            ></div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
