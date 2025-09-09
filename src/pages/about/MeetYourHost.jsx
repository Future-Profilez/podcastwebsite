import Image from "next/image";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiMedal } from "react-icons/pi";
export default function MeetYourHost() {

    const host = [
        {
            "id": 1,
            "name": "Parag Dixit - Mortgage & Investment Strategy Expert",
            "paragraph": "Parag brings a unique dual perspective as both a mortgage specialist and a successful property investor. With over 25 years in financial services, he's the founding director of Nfinity Financials and PropWealth and was recently recognised as one of Australia's Top 10 Elite Brokers of 2024. His personal property investment journey began in 2016, giving him firsthand experience in building wealth through strategic property decisions, using complex mix of individual, trust and company assets. This combination of Strategic mindset and expertise, deep financial understanding and real estate investment experience makes him uniquely positioned to guide clients through both financing and property investment strategies.",
            "image-url": "/host.png"
        },
        {
            "id": 2,
            "name": "Mudit Khandelwal - Your Strategic Finance Director",
            "paragraph": "An alumnus of IIT Kanpur and IIM Ahmedabad, Mudit brings academic excellence and real-world mastery to every client interaction. As Director at Nfinity Financials, this 5-star-rated mortgage broker has earned over 200 five-star reviews, reflecting his exceptional service standards. With over 20 years of entrepreneurial experience, Mudit is passionate about helping Australians achieve their homeownership dreams faster, easier, and at competitive rates. His strategic approach transforms complex financial scenarios into clear pathways to property wealth.",
            "image-url": "/host.png"
        },
        {
            "id": 3,
            "name": "Julius Dabre - Your Property Acquisition Specialist",
            "paragraph": "As Founder of PropWealth, Julius has orchestrated over $67 million in property transactions, establishing himself as a formidable force in Australia's property landscape. His specialty lies in identifying high-growth suburbs before they become mainstream, combining profound market trend analysis with practical, actionable advice. Julius's insights have empowered over 100,000 investors to make informed decisions, turning market knowledge into tangible portfolio growth.", "image-url": "/host.png"
        }
    ]

    return (
        <section className="bg-black text-white pb-5 sm:pb-10 sm:pt-10">
            <div className="mx-auto container xl:max-w-[1440px] px-4 ">
                {/* Left Side - Host Image */}

                <div className="text-center mb-12">

                    <h2 className="text-[30px] sm:text-[41px] lg:text-[52px] font-[700] mb-2 uppercase">

                        MEET YOUR <span className="text-theme">HOST</span>
                    </h2>
                    <p className="text-[18px] sm:text-[20px] md:text-[18px] mb-4 text-[#FFFFFFCC]">
                        Together, Parag, Mudit, and Julius represent the complete property investment ecosystem of mortgage mastery, strategic financing, and acquisition expertise unified under one educational platform. Their combined decades of experience and proven track records create an unparalleled resource for discerning investors. Each brings distinct strengths that complement the others, ensuring you receive comprehensive guidance whether you're securing your first investment property or expanding an established portfolio.
                    </p>
                </div>

                <div className="mt-6 mb-4">
                    {host && host.map((content, index) => (
                        <div
                            key={index}
                            className={`md:flex items-center gap-8 md:pb-12 ${index % 2 === 0 ? "flex-col md:flex-row " : "flex-col-reverse  md:flex-row-reverse"
                                }`}>
                            {/* Image */}
                            <div className="md:w-1/2">
                                <img
                                    src={content["image-url"]}
                                    alt="Podcast Host"
                                    width={650}
                                    className="rounded-lg 
                                    transform transition-transform duration-500 shadow hover:scale-105 sm:pb-4"
                                />
                            </div>
                            {/* Text */}
                            <div className="md:w-1/2">
                                <h3 className="text-base sm:text-lg lg:text-xl font-[700] mb-5 mt-2 uppercase">{content.name}</h3>
                                <p className="text-[18px] sm:text-[20px] md:text-[18px] mb-7 md:mb-5  text-[#FFFFFFCC] text-justify">{content.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
