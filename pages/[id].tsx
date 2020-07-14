import Head from "next/head";
import { useRouter } from "next/router";

// Container
import SinglePlant from "~/containers/SinglePlant";

// Components
import Content from "~/components/Content";
import Page from "~/components/Page";

const SinglePlantPage = () => {
  const router = useRouter();
  const id = router.query.id as any;

  return (
    <Page>
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <SinglePlant id={id} />
      </Content>
    </Page>
  );
};

export default SinglePlantPage;
