import Link from "next/link";
import { css } from "otion";

// Trefle
import { AllPlants } from "~/trefle";

// Components
import Card from "~/components/Card";
import Grid from "~/components/Grid";

const PlantList = ({ plants }: { plants: AllPlants }) => {
  return (
    <Grid>
      {plants.map((plant) => (
        <Card key={`Plant__${plant.slug}`}>
          <p>
            <span className={css({ color: "#A5C577", paddingRight: 8 })}>
              Scientific:
            </span>
            <Link href={`/?q=${plant.scientific_name}`}>
              <a
                className={css({
                  textTransform: "uppercase",
                  color: "#000000",
                  ":hover": {
                    cursor: "pointer",
                    color: "#6D9837",
                  },
                })}
              >
                {plant.scientific_name}
              </a>
            </Link>
          </p>
          <p>
            <span className={css({ color: "#A5C577", paddingRight: 8 })}>
              Common:
            </span>
            {plant.common_name ? (
              <Link href={`/?q=${plant.common_name}`}>
                <a
                  className={css({
                    textTransform: "uppercase",
                    color: "#000000",
                    ":hover": {
                      cursor: "pointer",
                      color: "#A5C577",
                    },
                  })}
                >
                  {plant.common_name}
                </a>
              </Link>
            ) : (
              <span className={css({ textTransform: "uppercase" })}>
                Unknown
              </span>
            )}
          </p>
        </Card>
      ))}
    </Grid>
  );
};

export default PlantList;
