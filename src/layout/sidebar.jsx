import React, { useState } from "react";
import { MdSpaceDashboard, MdReviews, MdPayments } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { FaPodcast } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function SideBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          className="lg:hidden p-2 fixed font-bold top-2.5 text-gray-400 z-[99]"
          onClick={() => setIsOpen(true)}
        >
          <IoIosMenu size={24} />
        </button>
      )}

      <div
        className={`z-50 custom_scroll sidebar border-opacity-10 w-[260px] md:w-[286px] fixed left-0 top-0 bottom-0 overflow-y-auto bg-[#0e0e0e] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        {isOpen && (
          <button
            className="lg:hidden p-2 absolute left-[213px] top-6 text-red-500 border border-red-500 z-[99] rounded"
            onClick={() => setIsOpen(false)}
          >
            <IoMdArrowRoundBack size={18} />
          </button>
        )}

        <div className="px-3 md:px-4 lg:px-6 text-center py-6 lg:py-8">
          <Link href="/">
            <Image
              src="/Logo.png"
              height={1000}
              width={1000}
              alt="avatar"
              className="h-[85px] w-[100px] mx-2 inline-block"
            />
          </Link>
        </div>

        <div className="px-3 lg:px-4">
          <Link
            href="/admin/setting"
            className="user_row p-2.5 bg-[#1a1a1a] shadow-md rounded-lg lg:rounded-xl flex items-center gap-3"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img
                src="/Placeholder.png"
                alt="User Avatar"
                className="w-11 h-11 rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm capitalize text-white -tracking-[0.04em]">
                Admin
              </p>
            </div>
          </Link>
        </div>

        <div className="py-4 lg:py-5">
          <div className="mb-4 mt-8 font-medium">
            <div className="px-3 md:px-4 lg:px-6 uppercase text-gray-400 text-sm font-medium mb-4 lg:mb-5">
              MAIN MENU
            </div>
            <ul className="mt-2 space-y-1 mb-10">
              <Link
                href="/admin"
                className={`flex items-center py-2.5 px-3 md:px-4 lg:px-6 gap-2 text-base font-medium tracking-[-0.06em] ${
                  pathname === "/admin"
                    ? "text-white bg-[#D6202C]"
                    : "text-gray-300 hover:bg-[#1f1f1f]"
                }`}
              >
                <MdSpaceDashboard size={20} />
                Dashboard
              </Link>
              <Link
                href="/admin/podcast"
                className={`flex items-center py-2.5 px-3 md:px-4 lg:px-6 gap-2 text-base font-medium tracking-[-0.06em] ${
                  pathname === "/admin/podcast"
                    ? "text-white bg-[#D6202C]"
                    : "text-gray-300 hover:bg-[#1f1f1f]"
                }`}
              >
                <FaPodcast size={20} />
                Podcast
              </Link>
              <Link
                href="/admin/setting"
                className={`flex items-center py-2.5 px-3 md:px-4 lg:px-6 gap-2 text-base font-medium tracking-[-0.06em] ${
                  pathname === "/admin/setting"
                    ? "text-white bg-[#D6202C]"
                    : "text-gray-300 hover:bg-[#1f1f1f]"
                }`}
              >
                <IoSettingsOutline size={20} />
                Settings
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
