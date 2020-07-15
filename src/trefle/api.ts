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
  AllPlantsParams,
  Resource,
} from "./types";

export const getAllKingdoms = (token: string) =>
  axios.get<AllKingdoms>(`${baseURL}/v1/kingdoms`, {
    params: { token },
  });

export const getKingdom = (id: number, token: string) =>
  axios.get<Kingdom>(`${baseURL}/v1/kingdoms/${id}`, {
    params: { token },
  });

export const getAllSubkingdoms = (token: string) =>
  axios.get<AllSubkingdoms>(`${baseURL}/v1/subkingdoms`, {
    params: { token },
  });

export const getSubkingdom = async (id: number, token: string) =>
  axios.get<Subkingdom>(`${baseURL}/v1/subkingdoms/${id}`, {
    params: { token },
  });

export const getAllPlants = async (token: string, params?: AllPlantsParams) => {
  if (params.q) {
    return axios.get<AllPlants>(`${baseURL}/v1/plants/search`, {
      params: { token, ...params },
    });
  } else {
    return axios.get<AllPlants>(`${baseURL}/v1/plants`, {
      params: { token, ...params },
    });
  }
}

export const getPlant = async (id: number, token: string) =>
  axios.get<Resource<Plant>>(`${baseURL}/v1/plants/${id}`, {
    params: { token },
  });

export const getAllSpecies = async (token: string) =>
  axios.get<AllSpecies>(`${baseURL}/v1/species`, {
    params: { token },
  });

export const getSpecies = async (id: number, token: string) =>
  axios.get<Resource<Species>>(`${baseURL}/v1/species/${id}`, {
    params: { token },
  });
