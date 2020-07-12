import { useCallback, useMemo } from "react";
import Head from "next/head";
import { css } from "otion";

// Containers
import Plants from "~/containers/Plants";

// Components
import Content from "~/components/Content";
import NavBar from "~/components/NavBar";
import Page from "~/components/Page";
import Search from "~/components/Search";

// Trefle
import { AllPlantsParams } from "~/trefle";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleSearchChange = useCallback(
    (q: string) => router.push(`/?q=${q}`),
    [router]
  );

  const params: AllPlantsParams = useMemo(() => {
    return router?.query ?? {};
  }, [router.query]);

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
            alignSelf: "center",
            margin: 0,
          })}
        >
          Plant Wiki
        </h1>
        <p
          className={css({
            alignSelf: "center",
            color: "#9B9B9B",
            paddingBottom: 8,
          })}
        >
          Explore 841,534 plants including 5,109 with detailed data, and 420,767
          synonyms!
        </p>

        <Search defaultValue={params.q} onChange={handleSearchChange} />

        <div className={css({ height: 64, width: "100%" })} />

        <Plants params={params} />
      </Content>
    </Page>
  );
};

export default Home;
