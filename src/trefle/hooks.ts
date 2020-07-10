import { useMemo } from "react";
import { useQuery } from "react-query";
import nookies from "nookies";

import { getAllSubkingdoms, getAllKingdoms } from "./index";
import { AllKingdoms, AllSubkingdoms } from "./types";

export const useAllKingdoms = () => {
  const info = useQuery<AllKingdoms, string>("kingdoms", async (_key) => {
    const { token } = nookies.get(undefined);

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
  const info = useQuery<AllSubkingdoms, string>("subkingdoms", async (_key) => {
    const { token } = nookies.get(undefined);

    const subkingdoms = await getAllSubkingdoms(token);

    return subkingdoms;
  });

  return useMemo(
    () => ({
      ...info,
      subkingdoms: info.data,
    }),
    [info]
  );
};
