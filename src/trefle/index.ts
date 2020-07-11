import { AxiosError, AxiosResponse } from "axios";

// Token
import { getToken, refreshToken } from "./token";

// API
import * as trefle from "./api";

// Types
import * as types from "./types";
export * from "./types";

export const fetchAllKingdoms = async (_key: string) => {
  return handleRequest<types.AllKingdoms>((token) =>
    trefle.getAllKingdoms(token)
  );
};

export const fetchKingdom = async (_key: string, id: number) => {
  return handleRequest<types.Kingdom>((token) => trefle.getKingdom(id, token));
};

export const fetchAllSubkingdoms = async (_key: string) => {
  return handleRequest<types.AllSubkingdoms>((token) =>
    trefle.getAllSubkingdoms(token)
  );
};

export const fetchSubkingdom = async (_key: string, id: number) => {
  return handleRequest<types.Subkingdom>((token) =>
    trefle.getSubkingdom(id, token)
  );
};

export const fetchAllPlants = async (_key: string) => {
  return handleRequest<types.AllPlants>((token) => trefle.getAllPlants(token));
};

export const fetchPlant = async (_key: string, id: number) => {
  return handleRequest<types.Plant>((token) => trefle.getPlant(id, token));
};

export const fetchAllSpecies = async (_key: string) => {
  return handleRequest<types.AllSpecies>((token) =>
    trefle.getAllSpecies(token)
  );
};

export const fetchSpecies = async (_key: string, id: number) => {
  return handleRequest<types.Species>((token) => trefle.getSpecies(id, token));
};

async function handleRequest<T>(
  func: (token: string) => Promise<AxiosResponse<T>>
) {
  const token = await getToken();

  try {
    const { data } = await func(token);

    return data;
  } catch (e) {
    const error: AxiosError = e;

    if (!error.response) {
      const newToken = await refreshToken();

      const { data } = await func(newToken);

      return data;
    } else {
      throw e;
    }
  }
}
