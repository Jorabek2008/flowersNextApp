import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
    </>
  );
}
