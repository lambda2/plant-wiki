import { GetServerSidePropsContext } from "next";

import axios from "axios";
import nookies from "nookies";

import { origin } from "~/constants";

export const initClientToken = async (context?: GetServerSidePropsContext) => {
  const {
    data: { token },
  } = await axios.get(`${origin}/api/client-token`);

  nookies.set(context, "token", token, {});

  return token;
};

export const getToken = async (context?: GetServerSidePropsContext) => {
  const cookies = nookies.get(context);

  if (cookies.token) {
    return cookies.token;
  }

  const token = await initClientToken(context);

  return token;
};
