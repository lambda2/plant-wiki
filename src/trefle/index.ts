import axios from "axios";

import { baseURL } from "~/constants";
import { AllPlants } from "./types";

export * from "./types";

export const getAllKingdoms = async (token: string) => {
  const { data } = await axios.get(`${baseURL}/kingdoms?token=${token}`);

  return data;
};

export const getKingdom = async (id: number, token: string) => {
  const { data } = await axios.get(`${baseURL}/kingdoms/${id}?token=${token}`);

  return data;
};

export const getAllSubkingdoms = async (token: string) => {
  const { data } = await axios.get(`${baseURL}/subkingdoms?token=${token}`);

  return data;
};

export const getSubkingdom = async (id: number, token: string) => {
  const { data } = await axios.get(
    `${baseURL}/subkingdoms/${id}?token=${token}`
  );

  return data;
};

export const getAllPlants = async (token: string) => {
  const { data } = await axios.get<AllPlants>(
    `${baseURL}/plants?token=${token}`
  );

  return data;
};
