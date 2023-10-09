"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import { FiSettings, FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
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
    <>
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
            <button onClick={toggleDrawer} className="md:hidden inline-block">
              <FiMenu className="text-white-main text-2xl" />
            </button>
          </div>
        </nav>
      </ComponentWrapper>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        style={{ height: "100%" }}
        className="bla bla bla"
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-8 p-4 bg-black-main">
          <div className="w-full flex items-center justify-end">
            <button onClick={toggleDrawer}>
              <RxCross1 className="text-white-main text-2xl" />
            </button>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-8">
            {" "}
            {menu.map((item: any, index: number) => (
              <Link
                key={index}
                onClick={toggleDrawer}
                href={item.route}
                className="text-white-main text-base font-semibold"
              >
                {item.name}
              </Link>
            ))}
            <button className="h-[52px] w-[160px] bg-brand-main rounded-2xl text-white-main text-lg font-bold ">
              Connect Wallet
            </button>
            <button className="">
              <FiSettings className="text-white-main text-3xl" />
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
