import Footer from "./components/Footer";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl h-full m-auto  flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 lg:px-8">
        <LeftSection>Left block</LeftSection>
        <RightSection>Right block</RightSection>
      </main>
      <Footer />
    </div>
  );
}
