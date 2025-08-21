import React, { useEffect, useState } from "react";
import Listing from "../api/Listing";
import { IoMdTime } from "react-icons/io";
import { FaHeadphones, FaUser, FaClock } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import Image from "next/image";

export default function Podcast() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const { playTrack } = useAudioPlayer();

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.EpsodeGetAll();
      console.log("response", response?.data?.data)
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  console.log("data", data);

  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-black py-12">
      <div className="mx-auto container xl:max-w-[1440px] px-4 ">
        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-10">
          <span className="text-theme">LATEST</span>{" "}
          <span className="text-white">EPISODES</span>
        </h2>

        {/* Episodes */}
        <div className="space-y-8">
          {data && data?.map((ep, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start bg-[#4B4B48] rounded-xl shadow-md overflow-hidden p-4"
              onClick={() => playTrack(ep)}
            >
              {/* Image */}
              {/* <img
                src={ep?.thumbnail}
                alt={ep?.title}
                className="md:w-1/3 w-full h-64 object-cover"
              /> */}
              {/* Thumbnail */}
              <div className="md:w-1/3 w-full h-64 relative rounded-lg overflow-hidden">
                <Image
                  src={ep?.thumbnail || ""}
                  alt={ep?.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {/* Hover Play Icon */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <FaPlay className="text-white text-lg sm:text-2xl" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 font-opensans">
                <h3 className="text-xl font-bold text-white capitalize">{ep?.title}</h3>
                <div className="flex items-center text-sm text-white gap-4 mt-2">
                  <span>Episode : {ep?.episode?._count?.episodes}</span>
                  {/* <span className="flex items-center gap-1">
                    <FaUser /> {ep?.author}
                  </span> */}
                  <span className="flex items-center gap-1">
                    <IoMdTime size={20}/> {ep?.duration} mins
                  </span>
                </div>

                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {expanded === ep?.id
                    ? ep?.description
                    : ep?.description.slice(0, 100) + "..."}
                </p>

                {/* See more */}
                <button
                  className="text-white text-sm mt-2 hover:underline"
                  onClick={() =>
                    setExpanded(expanded === ep?.id ? null : ep?.id)
                  }
                >
                  {expanded === ep?.id ? "See Less ▲" : "See More ▼"}
                </button>

                {/* Listen Button */}
                <button className="mt-4 cursor-pointer flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-full transition hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)]">
                  <FaHeadphones /> Listen Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 cursor-pointer rounded-md font-semibold bg-theme hover:opacity-90 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
