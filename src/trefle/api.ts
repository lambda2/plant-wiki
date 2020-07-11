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
} from "./types";

export const getAllKingdoms = (token: string) =>
  axios.get<AllKingdoms>(`${baseURL}/kingdoms`, {
    params: { token },
  });

export const getKingdom = (id: number, token: string) =>
  axios.get<Kingdom>(`${baseURL}/kingdoms/${id}`, {
    params: { token },
  });

export const getAllSubkingdoms = (token: string) =>
  axios.get<AllSubkingdoms>(`${baseURL}/subkingdoms`, {
    params: { token },
  });

export const getSubkingdom = async (id: number, token: string) =>
  axios.get<Subkingdom>(`${baseURL}/subkingdoms/${id}`, {
    params: { token },
  });

export const getAllPlants = async (token: string, params?: AllPlantsParams) =>
  axios.get<AllPlants>(`${baseURL}/plants`, {
    params: { token, ...params },
  });

export const getPlant = async (id: number, token: string) =>
  axios.get<Plant>(`${baseURL}/plants/${id}`, {
    params: { token },
  });

export const getAllSpecies = async (token: string) =>
  axios.get<AllSpecies>(`${baseURL}/species`, {
    params: { token },
  });

export const getSpecies = async (id: number, token: string) =>
  axios.get<Species>(`${baseURL}/species/${id}`, {
    params: { token },
  });
