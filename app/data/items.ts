export type ItemProps = {
  id: number;
  imageUrl: string;
  imageAlt: string;
  description: string;
  title: string;
  priceInCents: number;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
};

export const items: ItemProps[] = [
  {
    id: 1,
    imageUrl:
      "https://cdn.idealo.com/folder/Product/6650/4/6650441/s1_produktbild_mittelgross/k2-alexis-84-speed-alu-black_steel-blue-2019.jpg",
    imageAlt: "K2 ALEXIS 84 SPEED ALU black_steel blue (2019)",
    title: "K2 ALEXIS 84 SPEED ALU black_steel blue (2019)",
    description:
      "Fitness-Skates, Damen, Softboot, Kugellager ILQ 5, Rollenhärte 80A",
    priceInCents: 9900,
    formattedPrice: "99.00",
    reviewCount: 34,
    rating: 3,
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.idealo.com/folder/Product/200201/7/200201732/s1_produktbild_mittelgross/k2-marlee-30d0220.jpg",
    imageAlt: "K2 Marlee (30D0220)",
    title: "K2 Marlee (30D0220)",
    description:
      "Fitness-Skates, Damen, Softboot, Kugellager ILQ 5, Rollenhärte 80A",
    priceInCents: 5497,
    formattedPrice: "54.97",
    reviewCount: 24,
    rating: 5,
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.idealo.com/folder/Product/201426/0/201426043/s1_produktbild_mittelgross/k2-ascent-80-w-purple-pink-black-white.jpg",
    imageAlt: "K2 Ascent 80 W",
    title: "K2 Ascent 80 W",
    description:
      "Fitness-Skates, Damen, Softboot, Kugellager ILQ 5, Rollenhärte 80A",
    priceInCents: 8190,
    formattedPrice: "81.90",
    reviewCount: 14,
    rating: 4,
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.idealo.com/folder/Product/201904/4/201904445/s1_produktbild_mittelgross/k2-marlee-boa-inline-skates-2022.jpg",
    imageAlt: "K2 Inlineskates Raider Pro",
    title: "K2 Inlineskates Raider Pro",
    description:
      "Fitness-Skates, Damen, Softboot, Kugellager ILQ 5, Rollenhärte 80A",
    priceInCents: 7696,
    formattedPrice: "76.96",
    reviewCount: 14,
    rating: 4,
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.idealo.com/folder/Product/201904/4/201904445/s1_produktbild_mittelgross/k2-marlee-boa-inline-skates-2022.jpg",
    imageAlt: "K2 Inlineskates Raider Pro",
    title: "K2 Inlineskates Raider Pro",
    description:
      "Fitness-Skates, Damen, Softboot, Kugellager ILQ 5, Rollenhärte 80A",
    priceInCents: 7696,
    formattedPrice: "76.96",
    reviewCount: 14,
    rating: 4,
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.idealo.com/folder/Product/201904/4/201904445/s1_produktbild_mittelgross/k2-marlee-boa-inline-skates-2022.jpg",
    imageAlt: "K2 Inlineskates Raider Pro",
    title: "K2 Inlineskates Raider Pro",
    description:
      "Fitness-Skates, Damen, Softboot, Kugellager ILQ 5, Rollenhärte 80A",
    priceInCents: 7696,
    formattedPrice: "76.96",
    reviewCount: 14,
    rating: 4,
  },
];
