import Link from "next/link";
import React, { Children } from "react";

const OtherLoginScreensLayout = ({ children }) => {
  return (
    <div className=" flex flex-col  h-screen bg-customGrey000">
      <div className="bg-customSecondary w-full h-16 self-start">
        <div className="bg-customGrey000 h-8 w-[122px] m-[16px_48px] rounded-lg bg-customPrimary relative">
          <Link href="/" className="absolute inset-0 flex items-center justify-center">
            OCTA
          </Link>
        </div>
      </div>
      <div className="mt-14 ml-[124px] w-6/12">{children}</div>
    </div>
  );
};

export default OtherLoginScreensLayout;
