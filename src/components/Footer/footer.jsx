import React from "react";

const Footer = () => {
  return (
    <footer
      className="flex flex-wrap justify-between bg-black px-24 py-[35px] text-white max-md:gap-10 max-md:px-12 max-md:py-[35px] max-sm:flex-col max-sm:gap-8 max-sm:p-6"
      role="contentinfo"
    >
      <div className="flex-shrink-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b7a21e0d1266ac8bd50b462730f7c4d8fcc6b6e"
          alt="Chipmo лого"
          className="w-[154px] h-8 mt-5 max-sm:w-[120px] max-sm:h-[25px]"
        />
      </div>

      <div className="flex flex-col gap-[5px] text-base">
        <h3 className="text-[#E88524] text-xl font-bold mb-8 max-md:mb-6">Холбоо барих</h3>
        <a href="mailto:info@chipmo.mn" className="hover:text-[#E88524] transition-colors">
          info@chipmo.mn
        </a>
        <a href="tel:+97688108766" className="hover:text-[#E88524] transition-colors">
          +97688108766
        </a>
        <a href="tel:+97699192846" className="hover:text-[#E88524] transition-colors">
          +97699192846
        </a>
      </div>

      <nav aria-label="Үндсэн холбоосууд">
        <h3 className="text-[#E88524] text-xl font-bold mb-8 max-md:mb-6">Холбоосууд</h3>
        <ul className="flex flex-col gap-1.5 text-base text-center max-sm:items-center">
          <li><a href="/" className="hover:text-[#E88524] transition-colors">Нүүр</a></li>
          <li><a href="/about-rfid" className="hover:text-[#E88524] transition-colors">RFID Тухай</a></li>
          <li><a href="/system" className="hover:text-[#E88524] transition-colors">Систем</a></li>
          <li><a href="/calculator" className="hover:text-[#E88524] transition-colors">Тооцоолуур</a></li>
        </ul>
      </nav>

      <div className="max-sm:items-center max-sm:text-center">
        <h3 className="text-[#E88524] text-xl font-bold mb-8 max-md:mb-6">Сошиал сувгууд</h3>
        <div className="flex flex-col gap-[19px]">
          <a
            href="https://facebook.com/chipmo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
            aria-label="Chipmo Facebook"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/21a39ae8d4271858512615beb407b1f110a5bac9"
              alt="Facebook Icon"
              className="w-7 h-7 group-hover:opacity-80 transition-opacity"
            />
            <span className="text-base group-hover:text-[#E88524] transition-colors">Chipmo</span>
          </a>
          <a
            href="https://linkedin.com/company/chipmo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group"
            aria-label="Chipmo LinkedIn"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/064a0134877ed926c0ef19bba7d0db28fc3e17e7"
              alt="LinkedIn Icon"
              className="w-7 h-7 group-hover:opacity-80 transition-opacity"
            />
            <span className="text-base group-hover:text-[#E88524] transition-colors">Chipmo (Counting system)</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
