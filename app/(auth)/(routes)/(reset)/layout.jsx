import Image from "next/image";
import Link from "next/link";

import octalogo from "@/app/octalogo.svg";

const ResetPassword = ({ children }) => {
  return (
    <div className=" flex justify-center items-center h-screen custom-bg-grey100">
      <div className=" mt-[-2rem] w-2/3 mx-4 flex flex-col  justify-center items-center">
        <div className="mb-6 flex justify-center items-center">
          <Image src={octalogo} alt="octalogo" width={56} height={56} />
          <span className="custom-text-primary text-[40px] not-italic font-extrabold leading-[normal] tracking-[0.15px];">
            Octa
          </span>
        </div>
        <div className="w-1/2 ">{children}</div>
      </div>
    </div>
  );
};

export default ResetPassword;
