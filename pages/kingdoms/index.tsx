import Head from "next/head";
import { GetServerSideProps } from "next";

// Utils
import { getAllKingdoms, AllKingdoms } from "~/trefle";
import { getToken } from "~/utils/token";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = await getToken(context);
  const kingdoms = await getAllKingdoms(token);

  return {
    props: {
      kingdoms,
    },
  };
};

interface KingdomsPageProps {
  kingdoms: AllKingdoms;
}

const KingdomsPage = ({ kingdoms }: KingdomsPageProps) => {
  return (
    <div className="container">
      <Head>
        <title>Plant Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Plant Wiki</h1>

        <p className="description">Get started by browsing some Kingdoms</p>

        {kingdoms.map((kingdom) => (
          <div key={`Kingdom__${kingdom.id}`}>
            <span>{kingdom.name}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default KingdomsPage;
