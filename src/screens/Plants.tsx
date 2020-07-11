import Link from "next/link";

import { AllPlants, AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";
import { useState, useMemo } from "react";

const Loading = () => {
  return <div>loading...</div>;
};

const Data = ({ plants }: { plants: AllPlants }) => {
  return (
    <>
      {plants.map((plant) => (
        <Link key={`Plant__${plant.slug}`} href="/[id]" as={`/${plant.id}`}>
          <div>
            <span>{plant.common_name}</span>{" "}
            <span>{plant.scientific_name}</span>
          </div>
        </Link>
      ))}
    </>
  );
};

const Plants = () => {
  const [search, setSearch] = useState("");
  const [params, setParams] = useState<AllPlantsParams>();

  const { plants } = useAllPlants(params);

  return (
    <div>
      <h1 className="title">Welcome to Plant Wiki</h1>

      <p className="description">Get started by browsing some Subkingdoms</p>

      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setParams({ q: search });
          }
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {plants ? <Data plants={plants} /> : <Loading />}
    </div>
  );
};

export default Plants;
