import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import { useRouter } from "next/router";
import Listing from "../api/Listing";
import { FaItunesNote, FaAndroid, FaHeadphones } from "react-icons/fa";
import { PiSpotifyLogoFill } from "react-icons/pi";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import moment from "moment";
import Image from "next/image";

export default function Index() {
  const { playTrack } = useAudioPlayer();
  const router = useRouter();
  const { slug } = router.query;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchDetails = async (slug) => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.EpisodeByID(slug);
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData({});
    }
    setLoading(false);
  };

  useEffect(() => {
    if (slug) {
      fetchDetails(slug);
    }
  }, [slug]);

  console.log("data", data);
  return (
    <Layout>
      <div className="bg-[#0a0a0a] pt-[118px] lg:pt-[128px] pb-[20px]">
        <section className="mx-auto container xl:max-w-[1440px] px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{data?.title}</h1>
          <p className="text-gray-400 mb-6">
            By <span className="font-semibold">{data?.podcast?.author}</span> ·{" "}
            {moment(data?.createdAt).format("MMMM Do YYYY")}
          </p>
          {/* <div className="flex flex-wrap gap-4 mb-8">
        <button className="flex items-center gap-2 border border-orange-300 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md transition">
          <FaItunesNote />
          Subscribe On iTunes
        </button>
        <button className="flex items-center gap-2 border border-green-300 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition">
          <FaAndroid />
          Subscribe On Android
        </button>
      </div> */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-10">
            {/* Podcast Cover */}
            <Image
              src={data?.thumbnail}
              height={500}
              width={500}
              alt="Podcast Cover"
              className="w-full sm:w-80 h-52 sm:h-64 object-cover rounded-xl shadow-lg"
            />

            {/* Listen Now Button */}
            <div className="flex flex-wrap gap-4 sm:mt-0 mt-6 justify-center">
              <button className="flex items-center gap-2 border border-orange-300 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md transition cursor-pointer">
                <FaItunesNote />
                Subscribe On iTunes
              </button>
              <button className="flex items-center gap-2 border border-green-300 text-green-600 hover:bg-green-50 px-4 py-2 rounded-md transition cursor-pointer">
                <PiSpotifyLogoFill size={28}/>
                Subscribe On Spotify
              </button>
              <button
                className="w-fit flex items-center gap-3 bg-theme text-white px-6 sm:px-8 py-3 rounded-full hover:scale-105 transition-transform cursor-pointer shadow-md"
                onClick={() => playTrack(data)}
              >
                <FaHeadphones className="text-xl" />
                <span className="font-medium">Listen Now</span>
              </button>
            </div>
          </div>
          <p className="mt-5 text-white text-base md:text-lg leading-relaxed">
            {data?.description}
          </p>
          <div
            className=" text-left detail-content"
            dangerouslySetInnerHTML={{ __html: data?.detail }}
          />
        </section>
      </div>
    </Layout>
  );
}
