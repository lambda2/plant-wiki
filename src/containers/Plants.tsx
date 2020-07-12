import Link from "next/link";
import { css } from "otion";

import { AllPlants, AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";

const Loading = () => {
  return <div className={css({ padding: "0 16px" })}>loading...</div>;
};

const Data = ({ plants }: { plants: AllPlants }) => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridColumnGap: 32,
        gridRowGap: 32,
        paddingLeft: 32,
        paddingRight: 32,
        "@media": {
          "(max-width: 1024px)": {
            gridTemplateColumns: "repeat(2, auto)",
            paddingLeft: 16,
            paddingRight: 16,
          },
          "(max-width: 768px)": {
            gridTemplateColumns: "repeat(1, auto)",
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      })}
    >
      {plants.map((plant) => (
        <Link key={`Plant__${plant.slug}`} href="/[id]" as={`/${plant.id}`}>
          <div
            className={css({
              padding: "8px 16px",
              border: "1px solid #9B9B9B",
              borderRadius: 4,
              boxShadow:
                "0 4px 6px 1px #9B9B9B20, 0 1px 7px 1px #9B9B9B20, 0 2px 2px -1px #9B9B9B20",
            })}
          >
            <p>
              <span
                className={css({
                  color: "#A5C577",
                })}
              >
                Scientific:
              </span>{" "}
              <span className={css({ textTransform: "uppercase" })}>
                {plant.scientific_name}
              </span>
            </p>
            <p>
              <span
                className={css({
                  color: "#A5C577",
                })}
              >
                Common:
              </span>{" "}
              <span className={css({ textTransform: "uppercase" })}>
                {plant.common_name || "Unknown"}
              </span>
            </p>
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
