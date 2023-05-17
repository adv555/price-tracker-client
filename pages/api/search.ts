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
    const { q } = req.query;

    /**
     * TODO: Implement search / sort logic
     */

    // if (sort === "price-asc") {
    //   items.sort((a, b) => a.priceInCents - b.priceInCents);
    // } else if (sort === "price-desc") {
    //   items.sort((a, b) => b.priceInCents - a.priceInCents);
    // } else if (sort === "rating-desc") {
    //   items.sort((a, b) => b.rating - a.rating);
    // } else if (sort === "newest") {
    //   items.sort((a, b) => b.id - a.id);
    // }

    const searchItems = items.filter((item) => {
      const query = req.query.q?.toString().toLowerCase();
      return (
        item.title.toLowerCase().includes(query as string) ||
        item.description.toLowerCase().includes(query as string)
      );
    });

    res.status(200).json({
      message: `You searched for "${q}"`,
      items: searchItems as ItemProps[],
    });
  } catch (error) {
    res.status(500).end();
  }
}
