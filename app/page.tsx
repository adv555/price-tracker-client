import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { items } from "./data/items";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Dashboard items={items} />
      <Footer />
    </div>
  );
}
