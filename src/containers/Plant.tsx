import { Plant as PlantType } from "~/trefle";
import { usePlant } from "~/trefle/hooks";

const Loading = () => {
  return <div>loading...</div>;
};

const Data = ({ plant }: { plant: PlantType }) => {
  console.log(plant);
  return (
    <>
      <h1 className="title">{plant.scientific_name}</h1>
      <h2>aka {plant.common_name}</h2>
      <p>class: {plant.class?.name ?? ""}</p>
    </>
  );
};

interface PlantProps {
  id: number;
}

const Plant = ({ id }: PlantProps) => {
  const { plant } = usePlant(id);

  return <div>{plant ? <Data plant={plant} /> : <Loading />}</div>;
};

export default Plant;