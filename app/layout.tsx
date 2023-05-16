import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Price Tracker",
  description: "Track prices of your favorite products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Header />
        <Dashboard>{children}</Dashboard>
        <Footer />
      </body>
    </html>
  );
}
