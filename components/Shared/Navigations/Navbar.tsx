import React from "react";
import Link from "next/link";
import Image from "next/image";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { FiSettings, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Create Player",
      route: "/",
    },
    {
      name: "Leaderboards",
      route: "/",
    },
    {
      name: "Play Now",
      route: "/",
    },
  ];
  return (
    <ComponentWrapper
      id="navbar"
      style="w-full h-[80px] bg-black-main/20 backdrop-blur-sm"
    >
      <nav className="w-full h-full flex items-center justify-between">
        <Link href={"/"} className="w-[140px] h-[54px] relative">
          <Image
            className="w-full h-full object-fill"
            src={"/Assets/Logo.png"}
            alt=""
            fill
          />
        </Link>
        <div className="h-full flex items-center justify-center gap-8">
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              className="text-white-main text-base font-semibold md:inline-block hidden"
            >
              {item.name}
            </Link>
          ))}

          <button className="h-[52px] w-[160px] lg:inline-block hidden bg-brand-main rounded-2xl text-white-main text-lg font-bold ">
            Connect Wallet
          </button>
          <button className="lg:inline-block hidden">
            <FiSettings className="text-white-main text-3xl" />
          </button>
          <button className="md:hidden inline-block">
            <FiMenu className="text-white-main text-2xl" />
          </button>
        </div>
      </nav>
    </ComponentWrapper>
  );
};

export default Navbar;
