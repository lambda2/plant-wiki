import Head from "next/head";
import { GetServerSideProps } from "next";

import { getToken } from "~/utils/token";

import { getPlant, Plant } from "~/trefle";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id as any;

  const token = await getToken(context);
  const plant = await getPlant(id, token);

  return {
    props: {
      plant,
    },
  };
};

interface SinglePlantPageProps {
  plant: Plant;
}

const SinglePlantPage = ({ plant }: SinglePlantPageProps) => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{plant.common_name}</h1>
      </main>
    </div>
  );
};

export default SinglePlantPage;
