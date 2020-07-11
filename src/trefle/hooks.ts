import { useMemo } from "react";
import { useQuery } from "react-query";

import {
  fetchAllSubkingdoms,
  fetchAllKingdoms,
  fetchAllPlants,
  fetchPlant,
} from "./index";

export const useAllKingdoms = () => {
  const info = useQuery(["kingdoms"], fetchAllKingdoms);

  return useMemo(
    () => ({
      ...info,
      kingdoms: info.data,
    }),
    [info]
  );
};

export const useAllSubkingdoms = () => {
  const info = useQuery(["subkingdoms"], fetchAllSubkingdoms);

  return useMemo(
    () => ({
      ...info,
      subkingdoms: info.data,
    }),
    [info]
  );
};

export const useAllPlants = () => {
  const info = useQuery(["plants"], fetchAllPlants);

  return useMemo(
    () => ({
      ...info,
      plants: info.data,
    }),
    [info]
  );
};

export const usePlant = (plantId: number) => {
  const info = useQuery(["plant", plantId], fetchPlant);

  return useMemo(
    () => ({
      ...info,
      plant: info.data,
    }),
    [info]
  );
};
