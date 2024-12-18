import Image from "next/image";
import filterQuality from "../../public/images/background/bg-veg1.webp";
import foodHero from "../../public/images/svg/foodhero.svg";
import environmentImage from "../../public/images/environment.png";
import efficiencyImage from "../../public/images/efficiency.png";
import researchImage from "../../public/images/research.png";
import agronomyImage from "../../public/images/agronomy.png";
import zeroHunger from "../../public/images/ZeroHunger.png";
import responsibleConsumption from "../../public/images/ResponsibleConsumption.png";
import climate from "../../public/images/Climate.png";
import research from "../../public/images/research.jpg";
import point from "../../public/images/point.jpg";
import trade from "../../public/images/trade.jpg";
import trace from "../../public/images/trace.jpg";
import researchLogo from "../../public/images/svg/biki-research-logo.svg";
import pointLogo from "../../public/images/svg/biki-point-logo.svg";
import tradeLogo from "../../public/images/svg/biki-trade-logo.svg";
import traceLogo from "../../public/images/svg/biki-trace-logo.svg";
import businessModel from "../../public/images/business-model-biki.jpg";
import team from "../../public/images/background4.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModalContact from "./ModalContact";

export default function Infobar() {
  // Helper function to format numbers
  const formatNumber = (value) => {
    if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
    return value.toString();
  };

  const AnimatedNumber = ({ from, to }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    const [number, setNumber] = useState(from);

    useEffect(() => {
      if (isInView) {
        controls.start({
          number: to,
          transition: { duration: 2, ease: "easeOut" },
        });
      } else {
        controls.set({ number: from }); // Reset jika tidak terlihat
        setNumber(from); // Mengembalikan ke angka awal
      }
    }, [isInView, controls, from, to]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ number: from }}
        onUpdate={(latest) => setNumber(latest.number)}
      >
        {formatNumber(number)}
      </motion.div>
    );
  };

  return (
    <ParallaxProvider>
      <Parallax scaleX={[0.95, 1]} speed={10} startScroll={0} endScroll={500}>
        <div className="relative z-20 mx-auto p-6 sm:p-12 text-my-green drop-shadow-lg w-full min-h-screen rounded-md overflow-hidden">
          {/* Background SVG with Parallax */}
          <Image
            className="absolute left-0 top-0 -z-10 brightness-50"
            src={filterQuality}
            layout="fill"
            objectFit="cover"
            alt="Background"
          />

          <div className="z-20">
            <h1 className="text-white text-4xl font-bold">
              Sustainable Development Goals
            </h1>

            {/* buatkan 3 card yang posisinya di bawah kanan */}
            <div className="absolute flex flex-row gap-8 justify-end bottom-10 right-5">
              {/* card 1 */}
              <div className="text-start basis-1/6">
                <h1 className="fontFounders text-7xl font-bold text-white">
                  <AnimatedNumber from={0} to={60_000_000} />
                </h1>
                <p className="fontFounders text-white text-sm">
                  pieces of fruit prevented from waste.
                </p>
              </div>
              {/* card 2 */}
              <div className="text-start basis-1/6">
                <h1 className="fontFounders text-7xl font-bold text-white">
                  <AnimatedNumber from={0} to={9_000} />
                </h1>
                <p className="fontFounders text-white text-sm ">
                  metric tons CO₂-eq of greenhouse gas emissions avoided, the
                  equivalent of planting 151,800 trees.
                </p>
              </div>
              {/* card 3 */}
              <div className="text-start basis-1/6">
                <h1 className="fontFounders text-7xl font-bold text-white">
                  <AnimatedNumber from={0} to={2_700_000_000} />
                </h1>
                <p className="fontFounders text-white text-sm">
                  liters of water conserved, enough to fill 1,100 Olympic-sized
                  swimming pools.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-offWhite min-h-[40rem] px-4 sm:px-12 py-8 module-blok bottom-over top-over">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 p-[10px]">
            <Image className="w-[200px]" src={foodHero} alt="Food Hero" />
            <div className="flex-1 ml-4">
              <h1 className="text-my-green text-2xl sm:text-4xl font-bold text-center md:text-left">
                Stop Food Loss and Waste for Fight Climate Change
              </h1>
              <hr className="bg-my-green h-1 mt-5 w-1/4 mx-auto md:mx-0" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 p-4">
            {/* card 1 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={environmentImage}
                  alt="environmentImage"
                  width={100}
                  height={100}
                />
              </div>

              <h3 className="text-xl font-bold mt-2 mb-2">Climate-Smart</h3>

              <p className="text-sm text-black">
                We increase productivity and incomes of producers with
                eco-technology that can reducing greenhouse, reducing residues
                of pesticide, preventing food loss with food grade extending
                shlef life solution, preventing food waste with traceability
                system and contributing to reducing climate change impact
              </p>
            </div>
            {/* card 2 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={efficiencyImage}
                  alt="efficiencyImage"
                  width={100}
                  height={100}
                />
              </div>

              <h3 className="text-xl font-bold mt-2 mb-2">Holistic</h3>

              <p className="text-sm text-black">
                We involve all supply chain actor in the production, processing,
                and distribution to participate fully and benefit equitably. It
                can help to promote environment, social and economic
                development, increase food security and community welfare
              </p>
            </div>
            {/* card 3 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={researchImage}
                  alt="researchImage"
                  width={100}
                  height={100}
                />
              </div>

              <h3 className="text-xl font-bold mt-2 mb-2">Traceable</h3>

              <p className="text-sm text-black">
                We track the movement of agricultural products and estimate the
                shelf life from raw materials to final consumption for food
                waste reduction ecosystem
              </p>
            </div>
            {/* card 4 */}
            <div className="text-center">
              <div className="flex justify-center">
                <Image
                  src={agronomyImage}
                  alt="agronomyImage"
                  width={100}
                  height={100}
                />
              </div>

              <h3 className="text-xl font-bold mt-2 mb-2">
                End to End Tech and Service Solutions
              </h3>

              <p className="text-sm text-black">
                Since 2019, we have crafted technology products and field
                services to reduce food loss and waste for people, planet, and
                profit
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[40rem] bg-[#2f4e37]">
          <div className="flex flex-col justify-center items-center pb-32 relative">
            <h1 className="text-[#ffd550] text-center text-4xl font-bold pt-16">
              Sustainable Development{" "}
              <span className="marker-container">
                <span className="markup">Goals</span>
              </span>
            </h1>
            <hr className="bg-[#ffd550] h-1 border-0 mt-5 w-1/4" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 px-4 sm:px-8 md:px-16 lg:px-40">
            <div className="flex flex-col items-center text-center w-[200px] sm:w-[250px]">
              <Image
                className="rounded-xl"
                src={zeroHunger}
                alt="Zero Hunger"
                width={200}
                height={200}
              />
              <h3 className="text-white text-sm sm:text-base mt-2 mb-2">
                Support food security and sustainable food system
              </h3>
            </div>

            <div className="flex flex-col items-center text-center w-[200px] sm:w-[250px]">
              <Image
                className="rounded-xl"
                src={responsibleConsumption}
                alt="Zero Hunger"
                width={200}
                height={200}
              />
              <h3 className="text-white text-sm sm:text-base mt-2 mb-2">
                Apply responsible consumption and production food ecosystem
              </h3>
            </div>

            <div className="flex flex-col items-center text-center w-[200px] sm:w-[250px]">
              <Image
                className="rounded-xl"
                src={climate}
                alt="Zero Hunger"
                width={200}
                height={200}
              />
              <h3 className="text-white text-sm sm:text-base mt-2 mb-2">
                Take urgent action to fight climate change and its impact
              </h3>
            </div>
          </div>
        </div>

        <div className="relative bg-offWhite min-h-[40rem] module-blok bottom-over top-over">
          <div className="flex flex-col justify-center items-center pb-32 relative">
            <h3 className="text-lg text-my-green">Our Solution</h3>
            <h1 className="text-black text-4xl font-bold">
              Your Business is Our Main Focus
            </h1>
            <hr className="bg-my-green h-1 border-0 mt-5 w-1/4" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pb-32 relative m-8">
            {/* research card */}
            <motion.div
              whileHover={{
                scale: 1.1, // Sedikit memperbesar tombol saat di-hover
                transition: { duration: 0.3 }, // Durasi animasi
                ease: "easeInOut", // Jenis animasi
              }}
              whileTap={{
                scale: 0.95, // Efek kecil saat tombol ditekan
              }}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg md:h-[550px]"
            >
              <div>
                <Image
                  className="p-8 rounded-t-lg"
                  src={research}
                  alt="research"
                />
                <div className="px-5 pb-5">
                  <Image
                    className="inline-block align-middle"
                    src={researchLogo}
                    alt="researchLogo"
                  />
                  <h3 className="text-left text-lg mt-5 mb-5">
                    Eco-Solutions for Food Cultivation and Post Harvest Stage
                  </h3>

                  {/* read more */}
                  <Link
                    href=""
                    className="inline-flex items-center font-medium text-my-green"
                  >
                    <div className="hover-underline-animation">Read more</div>
                    <svg
                      className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* point card */}
            <motion.div
              whileHover={{
                scale: 1.1, // Sedikit memperbesar tombol saat di-hover
                transition: { duration: 0.3 }, // Durasi animasi
                ease: "easeInOut", // Jenis animasi
              }}
              whileTap={{
                scale: 0.95, // Efek kecil saat tombol ditekan
              }}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg md:h-[550px]"
            >
              <div>
                <Image className="p-8 rounded-t-lg" src={point} alt="point" />
                <div className="px-5 pb-5">
                  <Image
                    className="inline-block align-middle"
                    src={pointLogo}
                    alt="pointLogo"
                  />
                  <h3 className="text-left text-lg mt-5 mb-5">
                    Professional Services for Food Post Harvest Treatment with
                    Digitalizing System
                  </h3>

                  {/* read more */}
                  <Link
                    href=""
                    className="inline-flex items-center font-medium text-my-green"
                  >
                    <div className="hover-underline-animation">Read more</div>
                    <svg
                      className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* trade card */}
            <motion.div
              whileHover={{
                scale: 1.1, // Sedikit memperbesar tombol saat di-hover
                transition: { duration: 0.3 }, // Durasi animasi
                ease: "easeInOut", // Jenis animasi
              }}
              whileTap={{
                scale: 0.95, // Efek kecil saat tombol ditekan
              }}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg md:h-[550px]"
            >
              <div>
                <Image className="p-8 rounded-t-lg" src={trade} alt="trade" />
                <div className="px-5 pb-5">
                  <Image
                    className="inline-block align-middle"
                    src={tradeLogo}
                    alt="tradeLogo"
                  />
                  <h3 className="text-left text-lg mt-5 mb-5">
                    Food Commodities Trading to Reduce Over Food Loss Production
                  </h3>

                  {/* read more */}
                  <Link
                    href=""
                    className="inline-flex items-center font-medium text-my-green"
                  >
                    <div className="hover-underline-animation">Read more</div>
                    <svg
                      className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* trace card */}
            <motion.div
              whileHover={{
                scale: 1.1, // Sedikit memperbesar tombol saat di-hover
                transition: { duration: 0.3 }, // Durasi animasi
                ease: "easeInOut", // Jenis animasi
              }}
              whileTap={{
                scale: 0.95, // Efek kecil saat tombol ditekan
              }}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg md:h-[550px]"
            >
              <div>
                <Image className="p-8 rounded-t-lg" src={trace} alt="trace" />
                <div className="px-5 pb-5">
                  <Image
                    className="inline-block align-middle"
                    src={traceLogo}
                    alt="traceLogo"
                  />
                  <h3 className="text-left text-lg mt-5 mb-5">
                    Tech Solutions for Reduce Food Loss and Waste
                  </h3>

                  {/* read more */}
                  <Link
                    href=""
                    className="inline-flex items-center font-medium text-my-green"
                  >
                    <div className="hover-underline-animation">Read more</div>
                    <svg
                      className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative bg-white min-h-[40rem] module-blok bottom-over top-over">
          <h1 className="text-my-green text-4xl font-bold text-start pt-5 ml-5">
            Business Model
          </h1>
          <hr className="bg-my-green h-1 border-0 mt-5 w-40 ml-5" />

          <div className="flex justify-center items-center">
            <Image
              className="m-8 rounded-lg shadow-sm inline-block align-middle"
              src={businessModel}
              alt="businessModel"
              width={1200}
              height={800}
            />
          </div>
        </div>

        <div className="relative bg-[#d8e0a5] min-h-[40rem] module-blok bottom-over top-over flex flex-col gap-40 justify-center items-center">
          <div className="flex flex-col md:flex-row p-8">
            <Image
              className="m-8 rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
              src={team}
              alt="team"
              width={600}
              height={600}
            />
            <div className="flex flex-col gap-12 justify-start items-start">
              <h1 className="text-my-green text-3xl md:text-4xl font-bold pt-5 ml-5 leading-snug">
                " We cannot handle this issue on our own, so We invite you to be
                a part of our action! "
              </h1>

              <ModalContact />
            </div>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
