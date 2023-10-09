import Navbar from "@/components/Shared/Navigations/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <section
        id="hero"
        className="w-full h-[100dvh] bg-[url('/Assets/Hero/HeroBg.png')] bg-cover bg-center bg-no-repeat"
      >
        <Navbar />
      </section>
    </main>
  );
}
