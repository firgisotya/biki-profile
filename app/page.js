"use client";
import Overlap from "./components/Infobar";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Footer from "./components/Footer";
import Lenis from "lenis";
import Footer2 from "./components/Footer2";

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  useEffect(() => {
    const animationTimeline = gsap.timeline({
      onComplete: () => console.log("Animation Complete"), // Debugging
    });
    animationTimeline
      .to(".wipe", { height: "0%", duration: 1, ease: "power2.inOut" })
      .to(".wipe", { display: "none" }, "-=0.5")

      // Navbar animation (starts after wipe animation ends)
      .from(
        ".navbar",
        { y: "-100%", duration: 0.8, ease: "power2.inOut" },
        "-=0.5"
      )
      .to(".navbar", { y: "0%", duration: 0.8, ease: "power2.inOut" }, "-=0.5");

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="wipe fixed top-0 left-0 w-full h-full bg-white z-[1000]"></div>
        <Navbar />
        <main className="bg-[#d8e0a5] mt-20">
          <div className="relative w-full min-h-screen">
            <div className="absolute inset-0 flex justify-center items-center mx-10 px-8 py-6">
              <h1 className="fontFounders text-7xl md:text-8xl text-my-green font-bold text-center">
                <span class="marker-container">
                  <span class="marker">Reducing </span>
                </span>{" "}
                Food Loss
                <br />
                Building a Better Future
              </h1>
            </div>

            {/* <MyImages
            src={bgImage}
            width={"100%"}
            className={"absolute -top-24 -z-10 w-full min-h-full"}
          /> */}

            <div className="absolute -top-24 -z-10 w-full h-screen bg-[#d8e0a5]"></div>
          </div>

          {/* The yellow floting section */}
          <Overlap />

          <div
            className="relative h-[500px] rounded-b-md"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div className="fixed bg-[#2f4e37] text-white bottom-0 left-0 w-full"
            >
              <Footer2 />
            </div>
          </div>
        </main>
    </>
  );
}
