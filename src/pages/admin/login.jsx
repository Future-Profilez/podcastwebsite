import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Listing from "@/pages/api/Listing";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showConfirPassword, setShowConfirPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.Login({
        email: data?.email,
        password: data?.password,
      });

      if (response?.data?.status) {
        toast.success(response.data.message);
        localStorage &&
          localStorage.setItem("token", response?.data?.data?.token);
        if (redirect) {
          router.push(`${redirect}`);
          return;
        }
        router.push("/admin");
        setData({
          email: "",
          password: "",
        });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="bg-[#111] text-white px-4 lg:px-10 pt-5 pb-10 lg:pb-20 rounded-[20px] w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6 lg:mb-10">
          <Link href="/">
            <Image
              className="h-[100px] w-[117px]"
              height={1000}
              width={1000}
              layout="fixed"
              src={"/Logo.png"}
              alt="logo"
            />
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-2xl lg:text-4xl font-bold mb-6 tracking-[-0.04em]">
          LOG IN
        </h2>

        <div className="max-w-[421px] mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4 lg:mb-5">
              <label className="block text-base font-medium text-gray-300 tracking-[-0.06em] mb-1">
                Email
              </label>
              <input
                value={data?.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 h-[48px] lg:h-[56px] rounded-[10px] bg-[#1f1f1f] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6 lg:mb-10">
              <label className="block text-base font-medium text-gray-300 tracking-[-0.06em] mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showConfirPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 h-[48px] lg:h-[56px] rounded-[10px] bg-[#1f1f1f] border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirPassword(!showConfirPassword)}
                  className="absolute top-1/2 cursor-pointer right-4 -translate-y-1/2"
                >
                  {showConfirPassword ? (
                    <IoEyeOff size={24} className="text-gray-400" />
                  ) : (
                    <IoEye size={24} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              className="w-full bg-white text-black font-bold uppercase py-3.5 rounded-[10px] hover:bg-gray-200 transition cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging In..." : "LOG IN"}
            </button>
          </form>

          {/* Register Link */}
          {/* <p className="text-center text-base text-gray-400 mt-6 lg:mt-12 tracking-[-0.03em] font-medium">
            Not registered?{" "}
            <Link
              href="/student/register"
              className="text-white underline underline-offset-2 hover:text-gray-300"
            >
              Register.
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}
