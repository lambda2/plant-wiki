import Link from "next/link";
import { css } from "otion";

import { AllPlants, AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";

const Loading = () => {
  return <div>loading...</div>;
};

const Data = ({ plants }: { plants: AllPlants }) => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(4, auto)",
        gridColumnGap: 64,
        gridGap: 64,
        paddingLeft: 32,
        paddingRight: 32,
      })}
    >
      {plants.map((plant) => (
        <Link key={`Plant__${plant.slug}`} href="/[id]" as={`/${plant.id}`}>
          <div
            className={css({
              padding: 8,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "#9B9B9B",
              borderRadius: 4,
            })}
          >
            <p>{plant.common_name}</p>
            <p>{plant.scientific_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

interface PlantsProps {
  params: AllPlantsParams;
}

const Plants = ({ params }: PlantsProps) => {
  const { plants } = useAllPlants(params);

  return plants ? <Data plants={plants} /> : <Loading />;
};

export default Plants;
