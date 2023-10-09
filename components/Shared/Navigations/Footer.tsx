"use client";
import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <ComponentWrapper id="footer" style="bg-black-main lg:py-[70px] py-12">
      <div className="w-full flex flex-col items-center justify-start gap-8">
        <div className="w-full grid lg:grid-cols-[1fr,4fr] gap-8">
          <Link href={"/"} className="h-[68px] w-[170px] relative">
            <Image
              className="object-fill w-full h-full"
              src={"/Assets/Logo.png"}
              alt=""
              fill
            />
          </Link>
          <div className="w-full grid lg:grid-cols-4 grid-cols-2 gap-4">
            {/* explore */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <h3 className="text-black-off text-base font-semibold uppercase">
                Explore
              </h3>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Home
              </Link>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Features
              </Link>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Play Now
              </Link>
            </div>
            {/* About us */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <h3 className="text-black-off text-base font-semibold uppercase">
                About Us
              </h3>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                On Chain Games
              </Link>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Partners
              </Link>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Careers
              </Link>
            </div>
            {/* Legals */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <h3 className="text-black-off text-base font-semibold uppercase">
                Legal
              </h3>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Terms & Conditions
              </Link>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Privacy Policy
              </Link>
              <Link
                href={"#"}
                className="text-white-main text-base font-semibold"
              >
                Cookie Policy
              </Link>
            </div>
            {/* Links */}
            <div className="w-full flex flex-col items-start justify-start gap-4">
              <h3 className="text-black-off text-base font-semibold uppercase">
                Links
              </h3>
              <div className="w-full flex items-center justify-start gap-4">
                <FaXTwitter className="text-white-main text-2xl cursor-pointer" />
                <FaDiscord className="text-white-main text-2xl cursor-pointer" />
                <PiTelegramLogo className="text-white-main text-2xl cursor-pointer" />
                <HiOutlineMail className="text-white-main text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <span className="w-full h-[2px] bg-white-main"></span>
        <p className="text-white-main text-base font-medium">
          ©{year} On Chain Games Inc - All rights reserved.
        </p>
      </div>
    </ComponentWrapper>
  );
};

export default Footer;
