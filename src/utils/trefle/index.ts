import axios from "axios";

import { baseURL } from "~/constants";

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
