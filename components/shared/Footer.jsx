"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { footerLinks } from "@/constant";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is needed");
    try {
      setLoading(true);
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbw20cGitruYljT1dDvjgKh_y4WW6nwojoVjOIjhdbGbozeBnP4qzYiKFyslupBJ723i0w/exec",
        null,
        {
          params: { email },
        }
      );
      toast.success("Registration successful!");
      setLoading(false);
      setEmail("");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      setLoading(false);
      setEmail("");
    }
  };
  return (
    <footer className=" bg-black border-b-2 border-[#ffb42f]">
      <section className="main-container flex flex-col md:flex-row gap-10 justify-between py-16 xl:py-24">
        {/* logo */}
        <div className="flex flex-col mb-10 md:mb-0 min-w-[325px]">
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.png"
              alt="Katana Inu logo"
              width={136}
              height={139}
              className="mb-7 sm:mb-9 md:mb-12"
            />
          </Link>
          <h5 className="text-white font-jost uppercase text-xs sm:text-sm md:text-base mb-3 sm:mb-5 md:mb-7">
            Don&apos;t miss our latest news
          </h5>
          {/* form data */}
          <form onSubmit={handleSubmit} className="flex items-center form">
            <div className="bg-transparent rounded-full border border-[#414141] p-1">
              <label htmlFor="email">
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-[150px] bg-transparent text-white outline-none px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium"
                />
              </label>
              <Button
                className="rounded-full bg-[#f3a511] hover:bg-[#f3a511] sm:px-8 h-14 2xl:text-base disabled:opacity-80 disabled:cursor-not-allowed"
                disabled={loading}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full">
          {/* fotter links */}
          <div>
            <h5 className="font-jost text-white uppercase text-base mb-4 sm:mb-6 ml-8">
              Game
            </h5>
            <ul className="flex flex-col gap-4 sm:gap-6">
              {footerLinks.game.map((link, i) => (
                <li key={i} className=" list-none">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferer"
                    className="text-white hover:text-[#ffb42f] hover:opacity-100 transition-all duration-300 ease-in opacity-70 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-jost text-white uppercase text-base mb-4 sm:mb-6 ml-8">
              Contact
            </h5>
            <ul className="flex flex-col gap-4 sm:gap-6">
              {footerLinks.contact.map((link, i) => (
                <li key={i} className=" list-none">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferer"
                    className="text-white  hover:text-[#ffb42f] hover:opacity-100 transition-all duration-300 ease-in opacity-70 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-jost text-white uppercase text-base mb-4 sm:mb-6 ml-8">
              Legal
            </h5>
            <ul className="flex flex-col gap-4 sm:gap-6">
              {footerLinks.legal.map((link, i) => (
                <li key={i} className=" list-none">
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noreferer"
                    className="text-white  hover:text-[#ffb42f] hover:opacity-100 transition-all duration-300 ease-in opacity-70 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="py-6 sm:py-8 md:py-10lg:py-12 text-sm font-medium text-white text-center font-jost">
        All rights reserved by{" "}
        <span className="text-[#f3a511]">Chainvision Games</span>
      </div>
    </footer>
  );
};

export default Footer;
