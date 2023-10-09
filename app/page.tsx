import Hero from "@/components/Home/Hero";
import Web3Redefined from "@/components/Home/Web3Redefined";
import Navbar from "@/components/Shared/Navigations/Navbar";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#010A04]">
      <section
        id="hero"
        className="w-full lg:h-[100dvh] bg-[url('/Assets/Hero/HeroBg.png')] bg-cover bg-center bg-no-repeat"
      >
        <Navbar />
        <Hero />
      </section>
      <Web3Redefined />
    </main>
  );
}
