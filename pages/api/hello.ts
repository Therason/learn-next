import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}

// files in the api directory can be used to handle API calls
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ message: "Hello World!!" });
}
