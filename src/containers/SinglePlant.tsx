import { css } from "otion";

// Trefle
import { usePlant } from "~/trefle/hooks";

// Components
import Loader from "~/components/Loader";

interface PlantProps {
  id: number;
}

const Plant = ({ id }: PlantProps) => {
  const { plant, isLoading, isFetching, isError } = usePlant(id);

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (!plant || isError) {
    return null;
  }

  return (
    <div
      className={css({ maxWidth: 1260, width: "100%", alignSelf: "center" })}
    >
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
    </div>
  );
};

export default Plant;
