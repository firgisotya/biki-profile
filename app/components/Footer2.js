import Image from "next/image";
import logo from "../../public/images/svg/primary-logo-reverse.svg";
import Link from "next/link";

const Footer2 = () => {
  return (
    <>
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between mt-16">
        {/* Logo dan Company Info */}
        <div className="space-y-4 text-center md:text-left mb-8 md:mb-0">
          <Image src={logo} alt="Logo" width={100} height={100} />
          <p className="font-semibold">PT. Berkah Inovasi Kreatif Indonesia</p>
          <p className="text-sm max-w-md leading-relaxed">
            We build an End to End Tech and Service Solutions from food
            producers, food supply chain stakeholders, food industries,
            retailers and consumers to make a sustainable food system.
          </p>
        </div>

        {/* Hyperlinks */}
        <div className="space-y-2 mt-6 md:mt-0">
          <h3 className="font-semibold mb-2">Hyperlink</h3>
          <ul className="space-y-1">
            <li>
              <Link
                className="hover-underline-animation hover-underline-white"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover-underline-animation hover-underline-white"
                href={"/"}
              >
                Solution
              </Link>
            </li>
            <li>
            <Link className="hover-underline-animation hover-underline-white" href={"/"}>
              Teams
            </Link>
            </li>
            <li>
            <Link className="hover-underline-animation hover-underline-white" href={"/"}>
              About
            </Link>
            </li>
            <li>
            <Link className="hover-underline-animation hover-underline-white" href={"/"}>
              Contact
            </Link>
            </li>
          </ul>
        </div>

        {/* Alamat Kantor */}
        <div className="mt-6 md:mt-0">
          <h3 className="font-semibold mb-2">Office Address</h3>
          <p className="text-sm leading-relaxed">
            Taman Dramaga Permai V Block L11 No.5, Bogor, <br />
            West Java, Indonesia 16620
          </p>
          {/* Social Media */}
          <div className="flex space-x-3 mt-4">
            <a href="#" aria-label="Instagram">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png"
                alt="Facebook"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                alt="LinkedIn"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/youtube-play.png"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="flex justify-end mt-8 px-8">
        <div className="flex items-center space-x-2">
          <img
            src="https://img.icons8.com/emoji/20/gb-flag-emoji.png"
            alt="English Flag"
          />
          <span>English</span>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#4C7A4C] mt-8 mb-10">
        <p className="text-center text-xs mt-4">
          © 2024 BIKI — PT. Berkah Inovasi Kreatif Indonesia. All rights
          reserved. Developed by FSI
        </p>
      </div>
    </>
  );
};

export default Footer2;
