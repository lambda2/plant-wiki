import Link from "next/link";
import { css } from "otion";

import { AllPlants, AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";
import Loader from "~/components/Loader";
import Plant from "./Plant";

const Data = ({ plants }: { plants: AllPlants }) => {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridColumnGap: 32,
        gridRowGap: 32,
        width: "100%",
        maxWidth: 1260,
        alignSelf: "center",
        "@media": {
          "(max-width: 1260px)": {
            gridTemplateColumns: "repeat(2, auto)",
            gridColumnGap: 24,
            gridRowGap: 24,
          },
          "(max-width: 768px)": {
            gridTemplateColumns: "repeat(1, auto)",
            gridRowGap: 16,
          },
        },
      })}
    >
      {plants.map((plant) => (
        <div
          key={`Plant__${plant.slug}`}
          className={css({
            padding: "8px 16px",
            border: "1px solid #9B9B9B25",
            borderRadius: 4,
            boxShadow:
              "0 4px 6px 1px #9B9B9B20, 0 1px 7px 1px #9B9B9B20, 0 2px 2px -1px #9B9B9B20",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            ":hover": {
              boxShadow:
                "0 6px 8px 3px #A5C57725, 0 2px 12px 2px #A5C57725, 0 4px 4px -2px #A5C57725",
              borderColor: "#A5C57725",
            },
            textDecoration: "none",
          })}
        >
          <p>
            <span
              className={css({
                color: "#A5C577",
                textDecoration: "none",
              })}
            >
              Scientific:
            </span>{" "}
            <Link href={`/?q=${plant.scientific_name}`}>
              <a className={css({ textTransform: "uppercase" })}>
                {plant.scientific_name}
              </a>
            </Link>
          </p>
          <p>
            <span
              className={css({
                color: "#A5C577",
              })}
            >
              Common:
            </span>{" "}
            {plant.common_name ? (
              <Link href={`/?q=${plant.common_name}`}>
                <a className={css({ textTransform: "uppercase" })}>
                  {plant.common_name}
                </a>
              </Link>
            ) : (
              <span className={css({ textTransform: "uppercase" })}>
                Unknown
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

interface PlantsProps {
  params: AllPlantsParams;
}

const Plants = ({ params }: PlantsProps) => {
  const { plants, isLoading } = useAllPlants(params);

  if (isLoading) {
    return <Loader />;
  }

  return plants ? (
    plants.length > 1 ? (
      <Data plants={plants} />
    ) : (
      <Plant id={plants[0].id} />
    )
  ) : null;
};

export default Plants;
