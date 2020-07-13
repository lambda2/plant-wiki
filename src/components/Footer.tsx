import { css } from "otion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className={css({
        position: "sticky",
        bottom: "0",
        backgroundColor: "#9b9b9b30",
        color: "#000000",
        padding: 36,
      })}
    >
      <div
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
      </div>
    </footer>
  );
};
export default Footer;
