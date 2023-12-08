import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "../Container/Container";

function Footer() {
  return (
    <footer className="px-4 xs:px-0 py-6 bg-black">
      <Container>
        {/* Main footer container */}
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-between">
          {/* Left section of the footer */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 self-start">
            {/* First column of the left section */}
            <div className="flex flex-col gap-3 uppercase font-bold text-white">
              <span>find a store</span>
              <span>become a partner</span>
              <span>sign up for email</span>
              <span>send us feedback</span>
              <span>student discount</span>
            </div>

            {/* Second column of the left section */}
            <div className="grid grid-cols-2 gap-5 xs:gap-10">
              {/* First part of the second column */}
              <div className="flex flex-col gap-3">
                <span className="uppercase whitespace-nowrap font-bold text-white">
                  get help
                </span>
                <span className="text-[#C5C4C5]">Order Status</span>
                <span className="text-[#C5C4C5]">Delivery</span>
                <span className="text-[#C5C4C5]">Returns</span>
                <span className="text-[#C5C4C5]">Payment Options</span>
                <span className="text-[#C5C4C5]">Contact Us</span>
              </div>
              {/* Second part of the second column */}
              <div className="flex flex-col gap-3">
                <span className="uppercase whitespace-nowrap font-bold text-white">
                  about WalkInStyle
                </span>
                <span className="text-[#C5C4C5]">News</span>
                <span className="text-[#C5C4C5]">Careers</span>
                <span className="text-[#C5C4C5]">Investors</span>
                <span className="text-[#C5C4C5]">Sustainability</span>
              </div>
            </div>
          </div>

          {/* Right section of the footer (Social media icons) */}
          <div className="flex items-center gap-3 self-center lg:self-start">
            <div className="bg-[#737373] rounded-full p-3 lg:hover:cursor-pointer">
              <Linkedin />
            </div>
            <div className="bg-[#737373] rounded-full p-3 lg:hover:cursor-pointer">
              <Twitter />
            </div>
            <div className="bg-[#737373] rounded-full p-3 lg:hover:cursor-pointer">
              <Github />
            </div>
          </div>
        </div>

        {/* Lower section of the footer */}
        <div className="text-[#C5C4C5] text-sm flex flex-col lg:flex-row gap-4 lg:justify-between mt-8 lg:mt-14">
          <span className="text-center">
            © 2023 WalkInStyle, Inc. All Rights Reserved
          </span>
          <div className="flex items-center justify-center flex-wrap gap-4 whitespace-nowrap">
            <span>Guides</span>
            <span>Terms of Sale</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
