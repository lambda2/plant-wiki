import Head from "next/head";
import { GetServerSideProps } from "next";

// Components
import Subkingdoms from "~/components/Subkingdoms";

// Utils
import { initClientToken } from "~/utils/initClientToken";

export const getServerSideProps: GetServerSideProps = async (context) => {
  await initClientToken(context);

  return {
    props: {},
  };
};

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Plant Wiki</h1>

        <p className="description">Get started by browsing some Subkingdoms</p>

        <Subkingdoms />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
