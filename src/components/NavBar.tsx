import { css } from "otion";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={css({ paddingLeft: 16, paddingRight: 16 })}>
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
      </ul>
    </nav>
  );
};

export default NavBar;
