import React, { useState } from 'react';
import news from "../assets/episode.png";
import Image from 'next/image';
import Listing from '@/pages/api/Listing';
import toast from 'react-hot-toast';

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.AddSubscriber({ email: email });
      toast.success("Thank you for subscribing!");
      setEmail(""); // clear field
    } catch (error) {
      console.error("Error:", error);
      toast.error(error?.response?.data?.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#1C1C1C] mx-auto container xl:max-w-[1440px] px-16 py-16">
      <div className="mx-auto bg-[#2C2C2C] rounded-2xl border border-white overflow-hidden flex flex-col md:flex-row items-center md:items-stretch">
        {/* Left Content */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
            We help you grow with latest updates.
          </h2>
          {/* Input Box */}
          <div className="flex items-center mb-4 bg-transparent border border-gray-500 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 outline-none"
            />
            <button className={`px-6 py-2 bg-gray-600 hover:bg-purple-600 transition text-white font-medium 
               ${loading ? "opacity-50 cursor-not-allowed" : ""}`
              }
              onClick={handleSubmit}
              disabled={loading}>
            {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          <p className="text-gray-400 text-lg">
            Get exclusive tips, episode updates, and investment insights straight
            to your inbox — every week.
          </p>
        </div>
        {/* Right Image */}
        <div className="flex-1 relative h-[450px]">
          <Image
            src="/subscribe.png" 
            alt="Subscribe"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
