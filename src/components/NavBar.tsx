import { css } from "otion";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className={css({
        paddingLeft: 16,
        paddingRight: 16,
        position: "sticky",
        top: 0,
        background: "#ffffff",
      })}
    >
      <ul
        className={css({
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          justifyContent: "space-between",
          alignItems: "center",
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
                ":hover": {
                  cursor: "pointer",
                },
              })}
            ></div>
          </Link>
        </li>
        <li
          className={css({
            display: "flex",
            flexDirection: "row",
            alignSelf: "center",
          })}
        >
          <a
            className={css({
              textDecoration: "none",
              color: "#A5C577",
              paddingRight: "16px",
              textAlign: "center",
            })}
            href="https:/trefle.io"
            target="_blank"
          >
            powered by
            <br />
            trefle.io
          </a>
          <a href="https://github.com/10factory/plant-wiki" target="_blank">
            <div
              className={css({
                backgroundImage: "url(/github-branch.svg)",
                height: "30px",
                width: "30px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              })}
            ></div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
