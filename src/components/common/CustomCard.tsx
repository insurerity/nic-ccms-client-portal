import { ReactNode } from "react";
import { ComplaintIcon } from "../icons/complaint-icons";
import ActionButton from "./ActionButton";

interface CustomCardProps {
  icon: any;
  title: string;
  description: string;
  goto: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  icon,
  title,
  description,
  goto,
}) => {
  return (
    <div className=" border-gray-200 hover:bg-primaryLight/10 hover:border-[#5D2D79] hover:border-[1px]  bg-customCard md:p-6 rounded-[24px] text-center flex flex-row lg:flex-col items-center space-x-2 px-2 lg:space-x-0 lg:px-2">
      <div className="w-[4.5rem] h-[4.5rem] lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-start lg:text-center space-y-2 lg:space-y-6 py-2 lg:py-0">
        <h2 className="text-sm lg:text-base font-bold text-[#333] mb-3">
          {title}
        </h2>
        <p className="text-sm text-gray-600">{description}</p>
        <ActionButton
          goTo={goto}
          className="bg-[#59285F] text-white font-medium py-2 text-sm lg:text-base lg:py-3 lg:px-8 px-3 rounded-full mt-auto cursor-pointer"
          text="Proceed"
          actionFrom={title}
        />
      </div>
    </div>
  );
};

export default CustomCard;
