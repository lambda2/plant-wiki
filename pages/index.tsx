import Head from "next/head";

// Screens
import Plants from "~/screens/Plants";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Plants />
      </main>
    </div>
  );
};

export default Home;
