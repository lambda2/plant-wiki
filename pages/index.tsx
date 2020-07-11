import Head from "next/head";
import { css } from "otion";

import { useState } from "react";

// Screens
import Plants from "~/containers/Plants";

// Trefle
import { AllPlantsParams } from "~/trefle";

const Home = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState<AllPlantsParams>();

  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={css({ color: "green" })}>Welcome to Plant Wiki</h1>

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
      </main>
    </div>
  );
};

export default Home;
