import axios from "axios";

import { baseURL } from "~/constants";
import {
  AllPlants,
  AllKingdoms,
  AllSpecies,
  AllSubkingdoms,
  Kingdom,
  Subkingdom,
  Species,
  Plant,
} from "./types";

export * from "./types";

export const getAllKingdoms = async (token: string) => {
  const { data } = await axios.get<AllKingdoms>(`${baseURL}/kingdoms`, {
    params: { token },
  });

  return data;
};

export const getKingdom = async (id: number, token: string) => {
  const { data } = await axios.get<Kingdom>(`${baseURL}/kingdoms/${id}`, {
    params: { token },
  });

  return data;
};

export const getAllSubkingdoms = async (token: string) => {
  const { data } = await axios.get<AllSubkingdoms>(`${baseURL}/subkingdoms`, {
    params: { token },
  });

  return data;
};

export const getSubkingdom = async (id: number, token: string) => {
  const { data } = await axios.get<Subkingdom>(`${baseURL}/subkingdoms/${id}`, {
    params: { token },
  });

  return data;
};

export const getAllPlants = async (token: string) => {
  const { data } = await axios.get<AllPlants>(`${baseURL}/plants`, {
    params: { token },
  });

  return data;
};

export const getPlant = async (id: number, token: string) => {
  const { data } = await axios.get<Plant>(`${baseURL}/plants/${id}`, {
    params: { token },
  });

  return data;
};

export const getAllSpecies = async (token: string) => {
  const { data } = await axios.get<AllSpecies>(`${baseURL}/species`, {
    params: { token },
  });

  return data;
};

export const getSpecies = async (id: number, token: string) => {
  const { data } = await axios.get<Species>(`${baseURL}/species/${id}`, {
    params: { token },
  });

  return data;
};
