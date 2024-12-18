import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/svg/primary-logo.svg";
import { useDebounce } from "../helpers/debounce";
import { motion } from "motion/react";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const dbScrollY = useDebounce(scrollY, 50);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = useCallback(() => {
    const cur = window.scrollY;
    // jika scroll ke bawah navbar hilang
    if (cur > 50) {
      setIsVisible(false);
    } else if (cur < 50) {
      setIsVisible(true);
    } else {
      setIsVisible(true);
    }
  }, [dbScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 ${
          isVisible ? "showNav" : "hideNav"
        }`}
      >
        <div className="hidden md:block">
          <nav className="mx-16 px-8 py-3 rounded-b-xl bg-offWhite md:flex justify-between items-center font-bold text-my-green text-xs">
            <ul className="flex gap-12">
              <Link className="hover-underline-animation" href={"/"}>
                <li>Home</li>
              </Link>
              <Link className="hover-underline-animation" href={"/"}>
                <li>Solution</li>
              </Link>
            </ul>
            <Image className="h-7" src={logo} alt="Logo" />
            <ul className="flex gap-12">
              <Link className="hover-underline-animation" href={"/"}>
                <li>Teams</li>
              </Link>
              <Link className="hover-underline-animation" href={"/"}>
                <li>About</li>
              </Link>
              <Link className="hover-underline-animation" href={"/"}>
                <button>Contact</button>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <NavbarMobile visible={isVisible} />
        </div>
      </div>

      {/* Button Menu */}
      {!isVisible && (
        <motion.button
          className="fixed px-4 py-2 top-3 right-4 bg-my-green text-white text-xs z-50 rounded-xl flex items-center gap-2"
          onClick={() => setIsVisible(true)}
          whileHover={{
            scale: 1.1, // Sedikit memperbesar tombol saat di-hover
            backgroundColor: "#154726", // Ubah warna latar tombol saat di-hover
            transition: { duration: 0.3 }, // Durasi animasi
            ease: "easeInOut", // Jenis animasi
          }}
          whileTap={{
            scale: 0.95, // Efek kecil saat tombol ditekan
          }}
        >
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: 0, opacity: 1 }} // Muncul saat hover
          >
            Menu
          </motion.span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: 0, opacity: 1 }} // Muncul saat hover
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </motion.svg>
        </motion.button>
      )}
    </>
  );
}
