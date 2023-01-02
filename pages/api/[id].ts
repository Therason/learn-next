import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message: string
}

// basic dynamic API route
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  res.status(200).json({ message: id as string })
}