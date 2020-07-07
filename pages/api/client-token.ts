import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { authEndpoint } from "~/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data: { token },
  } = await axios.post(authEndpoint);

  res.json({ token });
};
