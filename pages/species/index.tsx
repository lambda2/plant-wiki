import Head from "next/head";
import { GetServerSideProps } from "next";

// Utils
import { getAllSpecies, AllSpecies } from "~/trefle";
import { getToken } from "~/utils/token";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = await getToken(context);
  const species = await getAllSpecies(token);

  return {
    props: {
      species,
    },
  };
};

interface SpeciesPageProps {
  species: AllSpecies;
}

const SpeciesPage = ({ species }: SpeciesPageProps) => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Plant Wiki</h1>

        <p className="description">Get started by browsing some Subkingdoms</p>

        {species.map((s) => (
          <div key={`SingleSpecies__${s.id}`}>
            <span>{s.common_name}</span> <span>{s.scientific_name}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SpeciesPage;
