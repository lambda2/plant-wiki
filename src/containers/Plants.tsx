// Trefle
import { AllPlantsParams } from "~/trefle";
import { useAllPlants } from "~/trefle/hooks";

// Components
import Loader from "~/components/Loader";
import PlantList from "~/components/PlantList";

// Containers
import SinglePlant from "~/containers/SinglePlant";

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
      <PlantList plants={plants} />
    ) : (
      <SinglePlant id={plants[0].id} />
    )
  ) : null;
};

export default Plants;
