import { Plant as PlantType } from "~/trefle";
import { usePlant } from "~/trefle/hooks";
import { css } from "otion";

const Loading = () => {
  return <div>loading...</div>;
};

const Data = ({ plant }: { plant: PlantType }) => {
  return (
    <>
      <h1 className="title">{plant.scientific_name}</h1>
      <h2>aka {plant.common_name}</h2>
      <p>class: {plant.class?.name ?? ""}</p>
      {plant.images?.map((image, idx) => (
        <img
          className={css({ maxWidth: "100%" })}
          key={image.url}
          src={image.url}
          alt={`${plant.scientific_name} Image ${idx + 1}`}
        />
      ))}
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
