import Head from "next/head";
import { GetServerSideProps } from "next";

// Utils
import { getAllSubkingdoms, AllSubkingdoms } from "~/trefle";
import { getToken } from "~/utils/token";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = await getToken(context);
  const subkingdoms = await getAllSubkingdoms(token);

  return {
    props: {
      subkingdoms,
    },
  };
};

interface SubkingdomsPageProps {
  subkingdoms: AllSubkingdoms;
}

const SubkingdomsPage = ({ subkingdoms }: SubkingdomsPageProps) => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Plant Wiki</h1>

        <p className="description">Get started by browsing some Subkingdoms</p>

        {subkingdoms.map((subkingdom) => (
          <div key={`Subkingdom__${subkingdom.id}`}>
            <span>{subkingdom.name}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SubkingdomsPage;
