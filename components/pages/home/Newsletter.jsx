"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

const Newsletter = () => {
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
    <section className="main-container mt-8 sm:mt-12 md:mt-16 xl:mt-20 bg-[url('/assets/images/newsletter.png')] bg-no-repeat bg-cover bg-[45%_0%] relative bg-black">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 sm:bg-black/20 block md:hidden" />
      <div className="flex justify-center sm:justify-end py-14 sm:pl-7 sm:mr-3 relative z-[1]">
        <div className="flex flex-col gap-1 xl:gap-2">
          <h3 className="text-[#f9c306] text-xl md:text-2xl lg:text-3xl 2xl:text-[34px] font-medium font-jost uppercase">
            Join our Journey
          </h3>
          <h2 className="font-semibold text-white text-heading-2 font-jost uppercase">
            Sign up to our newsletter
          </h2>
          {/* form data */}
          <form onSubmit={handleSubmit} className="flex items-center form">
            <div className="bg-transparent rounded-full border border-[#414141] p-1">
              {/* <label htmlFor="email"> */}
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-[150px] sm:min-w-[200px] bg-transparent text-white outline-none px-3 mr-2 h-14 placeholder:text-[#7a7676] placeholder:font-medium"
              />
              {/* </label> */}
              <Button
                className="rounded-full bg-[#f3a511] hover:bg-[#f3a511] sm:px-8 h-14 2xl:text-base disabled:opacity-80 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
