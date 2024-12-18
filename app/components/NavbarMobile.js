import { useState, useRef, useEffect } from "react"
import logo from "../../public/images/svg/primary-logo.svg";
import Link from "next/link";
import Image from "next/image";

const NavbarMobile = ({visible}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const show = visible;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-offWhite mx-16 my-5 px-4 py-3 rounded-xl">
      <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
          <Link href="/">
          <Image className="h-7 w-20" src={logo} alt="Logo" />
            </Link>
          <div className="flex md:hidden md:order-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              menuOpen && show ? "block" : "hidden" 
            } md:flex justify-between items-end w-full md:w-auto md:order-1`}
            id="mobile-menu-3"
          >
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium pl-3 pr-4 space-y-4 pt-8">
              <li>
                <Link className="hover-underline-animation" href="/">
                <p className="text-my-green text-2xl font-bold">Home</p>
                </Link>
              </li>
              <li>
                <Link className="hover-underline-animation" href="/">
                <p className="text-my-green text-2xl font-bold">Solution</p>
                </Link>
              </li>
              <li>
                <Link className="hover-underline-animation" href="/">
                <p className="text-my-green text-2xl font-bold">Teams</p>
                </Link>
              </li>
              <li>
                <Link className="hover-underline-animation" href="/">
                <p className="text-my-green text-2xl font-bold">About</p>
                </Link>
              </li>
              <li>
                <Link className="hover-underline-animation" href="/">
                <p className="text-my-green text-2xl font-bold">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarMobile;
