import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "../../public/images/svg/primary-logo-reverse.svg";
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mt-32 mb-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            classname="mb-2"
            src={logo}
            alt="logo"
            width={150}
            height={150}
          />
          <h2 className="font-bold text-lg">
            PT. Berkah Inovasi Kreatif Indonesia
          </h2>
          <p className="mt-4 text-sm">
            We build an End to End Tech and Service Solutions from food
            producers, food supply chain stakeholders, food industries,
            retailers and consumers to make a sustainable food system
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-bold text-lg">Hyperlink</h3>
            <ul className="flex flex-col mt-2 space-y-2">
              <link href='{"/"}' />
              <li classname="hover-underline-animation hover-underline-white">
                Home
              </li>
              <link href='{"/"}' />
              <li classname="hover-underline-animation hover-underline-white">
                Solution
              </li>
              <link href='{"/"}' />
              <li classname="hover-underline-animation hover-underline-white">
                Teams
              </li>
              <link href='{"/"}' />
              <li classname="hover-underline-animation hover-underline-white">
                About
              </li>
              <link href='{"/"}' />
              <li classname="hover-underline-animation hover-underline-white">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Office Address</h3>
            <p className="mt-2">
              Taman Dramaga Permai V Block L11 No.5, Bogor, West Java, Indonesia
              16620
            </p>
            <div className="flex space-x-4 mt-4">
              <a className="text-green-500" href="#">
                <i className="fab fa-instagram" />
              </a>
              <a className="text-green-500" href="#">
                <i className="fab fa-facebook" />
              </a>
              <a className="text-green-500" href="#">
                <i className="fab fa-linkedin" />
              </a>
              <a className="text-green-500" href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <div className="flex items-center space-x-2">
            <img
              alt="English flag"
              height={20}
              src="https://storage.googleapis.com/a1aa/image/BPumE0QjdG4JH1DAsOTdXIMXveTmA2dX6OqczKBDdvVwg09JA.jpg"
              width={30}
            />
            <select className="bg-green-800 text-white border-none">
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="border-t border-[#435f49] mt-6 pt-4 text-center">
        <p>
          © 2024 BIKI — PT. Berkah Inovasi Kreatif Indonesia. All right
          reserved. Developed by RUPA
        </p>
      </div>
    </div>
  );
};

export default Footer;
