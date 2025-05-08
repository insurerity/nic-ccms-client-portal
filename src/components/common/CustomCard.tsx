import { ReactNode } from "react";

const CustomCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" border-gray-200 hover:bg-primaryLight/10 hover:border-[#5D2D79] hover:border-[1px]  bg-customCard p-6 rounded-[24px] text-center flex flex-col items-center">
      {children}
    </div>
  );
};

export default CustomCard;
