import { css } from "otion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={css({
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        background: "#9B9B9B20",
        alignSelf: "center",
        padding: "16px 0",
        position: "relative",
        bottom: 0,
        "@media": {
          "(max-width: 1260px)": {
            width: "auto",
            alignSelf: "stretch",
          },
        },
      })}
    >
      <ul
        className={css({
          listStyle: "none",
          display: "flex",
          padding: 0,
        })}
      >
        <li
          className={css({
            display: "flex",
          })}
        >
          <div
            className={css({
              paddingRight: 16,
            })}
          >
            10factory LLC © 2020
          </div>
          <a
            className={css({
              textDecoration: "none",
            })}
            href="https://youtu.be/i9BRbtIgipQ"
            target="_blank"
          >
            🌱
          </a>
        </li>
        <li
          className={css({
            paddingLeft: 12,
          })}
        >
          <a
            className={css({
              color: "#000000",
            })}
            href="mailto:plants@10factory.com"
            target="_blank"
          >
            contact
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
