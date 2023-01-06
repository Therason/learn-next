import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
  time: string;
}

// similar to dynamic pages, api routes wrapped in brackets are dynamic
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  res.status(200).json({ message: id as string, time: "" + new Date() });
}
