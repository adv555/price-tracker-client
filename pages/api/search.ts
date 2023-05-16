import type { NextApiRequest, NextApiResponse } from "next";
import { items, ItemProps } from "@/app/data/items"; // Mock data

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { q: query } = req.query;

    /**
     * TODO: Implement search logic
     */

    const searchItems = items.slice(0, 5); // Mock data

    res.status(200).json({
      message: `You searched for "${query}"`,
      items: searchItems as ItemProps[],
    });
  } catch (error) {
    res.status(500).end();
  }
}
