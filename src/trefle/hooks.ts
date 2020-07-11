import { useMemo } from "react";
import { useQuery, AnyQueryKey } from "react-query";

import { getToken } from "~/utils/token";

import {
  getAllSubkingdoms,
  getAllKingdoms,
  getAllPlants,
  getPlant,
} from "./index";
import { AllKingdoms, AllSubkingdoms, AllPlants, Plant } from "./types";

export const useAllKingdoms = () => {
  const info = useQuery<AllKingdoms, AnyQueryKey>(["kingdoms"], async () => {
    const token = await getToken();

    const kingdoms = await getAllKingdoms(token);

    return kingdoms;
  });

  return useMemo(
    () => ({
      ...info,
      kingdoms: info.data,
    }),
    [info]
  );
};

export const useAllSubkingdoms = () => {
  const info = useQuery<AllSubkingdoms, AnyQueryKey>(
    ["subkingdoms"],
    async () => {
      const token = await getToken();

      const subkingdoms = await getAllSubkingdoms(token);

      return subkingdoms;
    }
  );

  return useMemo(
    () => ({
      ...info,
      subkingdoms: info.data,
    }),
    [info]
  );
};

export const useAllPlants = () => {
  const info = useQuery<AllPlants, AnyQueryKey>(["plants"], async () => {
    const token = await getToken();

    const plants = await getAllPlants(token);

    return plants;
  });

  return useMemo(
    () => ({
      ...info,
      plants: info.data,
    }),
    [info]
  );
};

export const usePlant = (plantId: number) => {
  const info = useQuery<Plant, AnyQueryKey>(
    ["plant", plantId],
    async (key, id: number) => {
      const token = await getToken();

      const plant = await getPlant(id, token);

      return plant;
    }
  );

  return useMemo(
    () => ({
      ...info,
      plant: info.data,
    }),
    [info]
  );
};
