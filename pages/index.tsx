import Head from "next/head";
import { GetServerSideProps } from "next";

// Utils
import { getAllPlants, AllPlants } from "~/trefle";
import { getToken } from "~/utils/token";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = await getToken(context);
  const plants = await getAllPlants(token);

  return {
    props: {
      plants,
    },
  };
};

interface HomeProps {
  plants: AllPlants;
}

const Home = ({ plants }: HomeProps) => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Plant Wiki</h1>

        <p className="description">Get started by browsing some Subkingdoms</p>

        {plants.map((plant) => (
          <div key={`Plant__${plant.slug}`}>
            <span>{plant.common_name}</span>{" "}
            <span>{plant.scientific_name}</span>
          </div>
        ))}
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
