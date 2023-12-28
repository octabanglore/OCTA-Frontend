import Image from "next/image";
import Link from "next/link";

import octalogo from "@/app/octalogo.svg";

const LoginLayout = ({ children }) => {
  return (
    <div className=" flex justify-center items-center h-screen bg-customGrey100">
      <div className=" mt-[-2rem] w-2/3 mx-4 flex flex-col  justify-center items-center">
        <div className="mb-6 flex justify-center items-center">
          <Image src={octalogo} alt="octalogo" width={56} height={56} />
          <span className="text-[#0A68A8] text-[40px] not-italic font-extrabold leading-[normal] tracking-[0.15px];">
            Octa
          </span>
        </div>
        <div className="w-1/2 ">{children}</div>
        <div className="flex justify-center items-center mt-8 custom-b2 text-customGrey800">
          <label>New to Octa? </label>
          <Link
            className=" ml-2 text-sm col text-customPrimary custom-b2"
            href="register"
          >
            Sign Up!
          </Link>
        </div>
        <div className="flex justify-center mt-16 w-4/5">
          <ul className="flex space-x-12">
            <li>
              <Link className="custom-b1 text-customGrey800" href="about">
                About
              </Link>
            </li>
            <li>
              <Link className="custom-b1 text-customGrey800" href="contactus">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                className="custom-b1 text-customGrey800"
                href="termsconditions"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="custom-b1 text-customGrey800" href="faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
