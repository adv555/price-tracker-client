import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import PropertyCard from "./components/PropertyCard";
import RightSection from "./components/RightSection";
import { items, ItemProps } from "./data/items";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl min-h-[calc(100vh-9rem)] m-auto  flex flex-col text-center px-4 sm:px-6 lg:px-8">
        {/* <section>Tabs & Filters</section> */}
        <section className="flex">
          <LeftSection>Left block</LeftSection>
          <RightSection>
            <div className="grid items-center justify-center sm:grid-cols-3 md:grid-cols-4 gap-2">
              {items.map((item: ItemProps) => (
                <PropertyCard key={item.id} {...item} />
              ))}
            </div>
          </RightSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}
