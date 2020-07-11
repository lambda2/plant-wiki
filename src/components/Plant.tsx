import { Plant as PlantType } from "~/trefle";
import { usePlant } from "~/trefle/hooks";

const Loading = () => {
  return <div>loading...</div>;
};

const Data = ({ plant }: { plant: PlantType }) => {
  return (
    <>
      <h1 className="title">{plant.scientific_name}</h1>
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
