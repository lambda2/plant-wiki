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

  if (!plants?.meta?.total || !plants || isError) {
    return (
      <span className={css({ alignSelf: "center" })}>
        No Results :( 🍀 Better Luck Next Time
      </span>
    );
  }

  return plants.meta.total > 1 ? (
    <PlantList plants={plants} />
  ) : (
    <SinglePlant id={plants.data[0].id} />
  );
};

export default Plants;
