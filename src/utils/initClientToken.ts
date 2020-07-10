import axios from "axios";
import nookies from "nookies";

import { origin } from "~/constants";

export const initClientToken = async (context) => {
  const {
    data: { token },
  } = await axios.get(`${origin}/api/client-token`);

  nookies.set(context, "token", token, {});
};
