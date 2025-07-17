import React, { useEffect, useState } from "react";
import AuthLayout from "@/layout/AuthLayout";
import Listing from "@/pages/api/Listing";
import { FaChevronDown } from "react-icons/fa";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(null);

  const fetchEarnings = async () => {
    try {
      setLoading(true);
      const main = new Listing();
      const response = await main.PodcastGet();
      setData(response?.data?.data || []);
    } catch (error) {
      console.log("error", error);
      setData({});
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEarnings();
  }, []);

  console.log("data", data);

  const toggleDropdown = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <AuthLayout page={"Podcast"}>
      <div className="bg-[#0a0a0a] text-white min-h-screen py-8 px-4 lg:px-12 space-y-8">
        <div className="flex items-center justify-between tracking-tight border-b border-[#2a2a2a] pb-4 mb-6 w-full">
        <h1 className="text-3xl lg:text-4xl font-bold">
          🎙️ Latest Podcasts
        </h1>
        <button
        //  onClick={downloadExcel}
         className="w-fit px-4 xl:px-8 py-2 h-[44px] hover:bg-white hover:text-black border border-black rounded-md tracking-[-0.06em] text-sm font-medium bg-white text-black cursor-pointer"
        >
          Add Podcast
        </button>
        </div>
        {data?.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#1a1a1a] rounded-2xl shadow-xl overflow-hidden w-full"
          >
            {/* Podcast Info */}
            <div
              className="flex flex-col md:flex-row justify-between md:items-center p-6 gap-6 cursor-pointer hover:bg-[#232323] transition"
              onClick={() => toggleDropdown(podcast.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                <img
                  src={podcast.thumbnail}
                  alt="Thumbnail"
                  className="w-44 h-28 object-cover rounded-md shadow-sm"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-1">{podcast.name}</h2>
                  <p className="text-sm text-gray-400">By {podcast.Author}</p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(podcast.createdAt).toLocaleString()}
                  </p>
                  <p className="text-sm mt-2 text-gray-300">
                    <span className="font-semibold">Cast:</span>{" "}
                    {podcast.Cast.join(", ")}
                  </p>
                </div>
              </div>

              {/* Chevron Icon */}
              <div
                className={`transition-transform duration-300 ${
                  active === podcast.id ? "rotate-180" : ""
                }`}
              >
                <FaChevronDown size={18} className="text-gray-400" />
              </div>
            </div>

            {/* Files Dropdown */}
            {active === podcast.id && (
              <div className="bg-[#111111] pb-6 pt-2 border-t border-gray-700">
                {podcast && podcast?.files && podcast?.files?.length === 0 ? (
                  <p className="text-gray-400 mt-3">No files available.</p>
                ) : (
                  podcast && podcast?.files && podcast?.files?.map((file) => (
                    <div
                      key={file.id}
                      className="bg-[#1f1f1f] p-5 rounded-xl mb-4 shadow-md"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-xl font-semibold">{file.title}</h4>
                        <p className="text-sm text-gray-400">
                          {file.duration} mins • {file.size} MB
                        </p>
                      </div>

                      <video
                        src={file.link}
                        controls
                        className="w-full rounded-lg border border-[#333] bg-black"
                      >
                        Your browser does not support the video tag.
                      </video>

                      <a
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                      >
                        🔗 Open Video in New Tab
                      </a>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </AuthLayout>
  );
}
