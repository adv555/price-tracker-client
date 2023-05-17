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
    const { q, sort = "newest" } = req.query;

    /**
     * TODO: Implement search / sort logic
     */

    const searchItems = items
      .filter((item) => {
        const query = req.query.q?.toString().toLowerCase();
        return (
          item.title.toLowerCase().includes(query as string) ||
          item.description.toLowerCase().includes(query as string)
        );
      })
      .sort((a, b) => {
        if (sort === "price-asc") {
          return a.priceInCents - b.priceInCents;
        } else if (sort === "price-desc") {
          return b.priceInCents - a.priceInCents;
        } else if (sort === "rating-desc") {
          return b.rating - a.rating;
        } else if (sort === "newest") {
          return b.id - a.id;
        }
        return a.id - b.id;
      });

    res.status(200).json({
      message: `You searched for "${q}" and sorted by "${sort}"`,
      items: searchItems as ItemProps[],
    });
  } catch (error) {
    res.status(500).end();
  }
}
