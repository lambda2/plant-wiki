import Head from "next/head";
import { css, keyframes } from "otion";

import { useState } from "react";

// Containers
import Plants from "~/containers/Plants";

// Components
import Content from "~/components/Content";
import Page from "~/components/Page";

// Trefle
import { AllPlantsParams } from "~/trefle";

const pulse = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const Home = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState<AllPlantsParams>();

  return (
    <Page>
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <nav>
          <ul
            className={css({
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
            })}
          >
            <li
              className={css({
                color: "blue",
                marginRight: "1rem",
                ":hover": {
                  color: "red",
                  animation: `${pulse} 3s infinite alternate`,
                },
              })}
            >
              Home
            </li>
            <li>Randomize</li>
          </ul>
        </nav>
        <h1>Welcome to Plant Wiki</h1>

        <p className="description">Get started by browsing some Subkingdoms</p>

        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setParams({ q: search });
            }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Plants params={params} />
      </Content>
    </Page>
  );
};

export default Home;
