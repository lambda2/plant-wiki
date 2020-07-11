import Link from "next/link";

import { AllPlants, AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";

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

interface PlantsProps {
  params: AllPlantsParams;
}

const Plants = ({ params }: PlantsProps) => {
  const { plants } = useAllPlants(params);

  return <div>{plants ? <Data plants={plants} /> : <Loading />}</div>;
};

export default Plants;
