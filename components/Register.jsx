"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

const Register = () => {
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
      toast.success("Registration is successfull!");
      setLoading(false);
      setEmail("");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <div className="bg-black">
      <section className="bg-[url('/assets/images/register-bg.png')] bg-no-repeat bg-cover main-container relative overflow-hidden">
        {/* overlay */}
        <div className="block sm:hidden w-full h-full absolute z-10 bg-black/50" />
        {/* content */}
        <div className="flex flex-row-reverse justify-center sm:justify-start items-center min-h-[160px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[260px] xl:min-h-[300px] 2xl:min-h-[360px] relative z-20 pr-5">
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <h3 className="font-poppins font-semibold text-white shadow-lg uppercase italic text-xs leading-none sm:text-sm sm:leading-tight md:text-base md:leading-tight lg:text-lg lg:leading-[1] 2xl:text-xl">
              ARE YOU READY? OPEN BETA April 2025
            </h3>
            <h1 className="text-[#ffcc00] font-poppins font-extrabold uppercase italic text-xl leading-none sm:text-xl sm:leading-none md:text-2xl md:leading-tight lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Register Now
            </h1>
            <h2 className="font-poppins font-semibold text-white shadow-lg uppercase italic text-lg leading-none sm:text-lg sm:leading-tight md:text-xl md:leading-tight lg:text-2xl xl:text-3xl 2xl:text-4xl">
              OPEN BETA Katana Inu
            </h2>
            <form
              onSubmit={handleSubmit}
              className="mt-1 md:mt-2 xl:mt-3 flex flex-col gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7"
            >
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="katanainu@gmail.com"
                className="border border-white w-full bg-black/10 h-8 min-w-[240px] sm:h-9 sm:min-w-[260px] md:h-10 md:min-w-[300px] lg:h-11 lg:min-w-[350px] xl:h-12 xl:min-w-[420px] 2xl:h-14 2xl:min-w-[500px] pl-3 sm:pl-4 md:pl-6 placeholder:text-white sm:placeholder:text-gray-300 text-white"
                required
              />
              <Button
                variant="customAnimated"
                type="submit"
                disabled={loading}
                className="bg-[#ffe500] rounded-none sm:py-4 md:py-3 md:px-6 h-8 lg:h-10 lg:py-5 lg:px-7 xl:px-8 xl:py-5 2xl:px-9 2xl:py-6 font-poppins font-bold text-black uppercase border-none text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl w-fit hover:text-white duration-300 ease-in-out disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {loading ? "Registering..." : "Register"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
