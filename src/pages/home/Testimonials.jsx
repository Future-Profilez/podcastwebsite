import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    review:
      "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
    name: "Jenny Wilson",
    role: "First-Time Investor",
  },
  {
    id: 2,
    review:
      "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
    name: "Jenny Wilson",
    role: "First-Time Investor",
  },
  {
    id: 3,
    review:
      "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
    name: "Jenny Wilson",
    role: "First-Time Investor",
  },
  {
    id: 4,
    review:
      "This podcast gave me the confidence to buy my first investment property. The advice is clear, honest, and incredibly practical.",
    name: "Jenny Wilson",
    role: "First-Time Investor",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#1C1C1C] mx-auto container xl:max-w-[1440px] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#9747FF] to-[#FC18D8] rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-[#9747FF] to-[#FC18D8] rounded-full opacity-20 blur-3xl -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          WHAT{" "}
          <span className="text-theme">
            OUR LISTENER
          </span>{" "}
          SAY?
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-[#4B4B4B] rounded-xl p-6 text-white shadow-lg h-full">
                {/* Stars */}
                <div className="flex gap-1 text-[#EB9F25] mb-4">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>

                {/* Review */}
                <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                  “{t.review}”
                </p>

                {/* Author */}
                <div>
                  <span className="font-semibold">{t.name}</span>{" "}
                  <span className="text-gray-400 text-sm">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition cursor-pointer">
          <IoChevronBack size={20} />
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 min-w-[40px] h-[40px] flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-[linear-gradient(270deg,#9747FF_0%,#FC18D8_97.09%)] transition cursor-pointer">
          <IoChevronForward size={20} />
        </button>
      </div>
    </section>
  );
}