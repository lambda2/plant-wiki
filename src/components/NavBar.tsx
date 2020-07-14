import { css } from "otion";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      className={css({
        display: "flex",
        justifyContent: "space-between",
        width: 1260,
        position: "sticky",
        background: "#ffffff",
        alignSelf: "center",
        "@media": {
          "(max-width: 1260px)": {
            padding: "0 16px",
            width: "auto",
            alignSelf: "stretch",
          },
        },
      })}
    >
      <ul
        className={css({
          listStyle: "none",
          alignItems: "center",
          padding: 0,
        })}
      >
        <li className={css({ display: "flex", alignItems: "center" })}>
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
          <a
            className={css({
              textDecoration: "none",
              color: "#A5C577",
              paddingLeft: "16px",
              textAlign: "center",
            })}
            href="https://trefle.io"
            target="_blank"
          >
            powered by{" "}
            <span className={css({ textDecoration: "underline" })}>
              trefle.io
            </span>
          </a>
        </li>
      </ul>
      <ul
        className={css({
          listStyle: "none",
          alignItems: "center",
          padding: 0,
        })}
      >
        <li>
          <a href="https://github.com/10factory/plant-wiki" target="_blank">
            <div
              className={css({
                backgroundImage: "url(/github.svg)",
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
