import Head from "next/head";
import { useRouter } from "next/router";

// Components
import Plant from "~/containers/Plant";

const SinglePlantPage = () => {
  const router = useRouter();
  const id = router.query.id as any;

  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Plant id={id} />
      </main>
    </div>
  );
};

export default SinglePlantPage;
