import PropertyCard from "./components/PropertyCard";
import { ItemProps, items } from "./data/items";

export default function Home() {
  return (
    <div className="lg:col-span-3">
      <div className="grid items-center justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {items.map((item: ItemProps) => (
          <PropertyCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
