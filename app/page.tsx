import Experience from "@/components/Home/Experience";
import Features from "@/components/Home/Features/Features";
import Followers from "@/components/Home/Followers";
import Hero from "@/components/Home/Hero";
import Legacy from "@/components/Home/Legacy";
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
      <Features />
      <Experience />
      <Legacy />
      <Followers />
    </main>
  );
}
