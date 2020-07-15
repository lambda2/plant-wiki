// Trefle
import { AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";

// Components
import Loader from "~/components/Loader";
import PlantList from "~/components/PlantList";

// Containers
import SinglePlant from "~/containers/SinglePlant";
import { css } from "otion";

interface PlantsProps {
  params: AllPlantsParams;
}

const Plants = ({ params }: PlantsProps) => {
  const { plants, isLoading, isError, isFetching } = useAllPlants(params);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (plants.length === 0 || !plants || isError) {
    return (
      <span className={css({ alignSelf: "center" })}>
        <span
          className={css({
            backgroundImage: "url(/oh-no.svg)",
            display: "flex",
            margin: "32px auto",
            height: "70px",
            width: "70px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          })}
        ></span>
        No Results :( 🍀 Better Luck Next Time
      </span>
    );
  }

  return plants.length > 1 ? (
    <PlantList plants={plants} />
  ) : (
    <SinglePlant id={plants[0].id} />
  );
};

export default Plants;
