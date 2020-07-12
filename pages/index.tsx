import Head from "next/head";

import { useState } from "react";

// Containers
import Plants from "~/containers/Plants";

// Components
import Content from "~/components/Content";
import Page from "~/components/Page";
import NavBar from "~/components/NavBar";

// Trefle
import { AllPlantsParams } from "~/trefle";

const Home = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState<AllPlantsParams>();

  return (
    <Page>
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Content>
        <h1
          className={css({
            display: "flex",
            justifyContent: "center",
          })}
        >
          Welcome to Plant Wiki
        </h1>
        <p
          className={css({
            display: "flex",
            justifyContent: "center",
          })}
        >
          Get started by browsing some Subkingdoms
        </p>
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
