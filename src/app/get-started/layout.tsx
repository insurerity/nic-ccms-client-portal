// import { Separator } from "@/components/ui/separator";
// import { Bell } from "lucide-react";
// import GoBack from "../components/back-button";

import { Separator } from "@/components/ui/separator";
import GoBack from "../components/back-button";
import { Bell } from "lucide-react";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="min-h-screen bg-[#59285F] p-4 md:p-8 flex items-center justify-center">
//       <div className="w-full max-w-6xl rounded-3xl border-4  bg-white overflow-hidden shadow-2xl">
//         {/* Header */}
//         <div className="p-6 md:p-8">
//           <div className="flex justify-between items-center">
//             {/* Logo and Title */}
//             <div className="flex items-center gap-4">
//               <div className="relative w-16 h-16 flex-shrink-0">
//                 <svg
//                   width="64"
//                   height="64"
//                   viewBox="0 0 64 64"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle
//                     cx="32"
//                     cy="32"
//                     r="30"
//                     fill="white"
//                     stroke="#59285F"
//                     strokeWidth="4"
//                   />
//                   <path
//                     d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52C43.05 52 52 43.05 52 32C52 20.95 43.05 12 32 12ZM32 48C23.18 48 16 40.82 16 32C16 23.18 23.18 16 32 16C40.82 16 48 23.18 48 32C48 40.82 40.82 48 32 48Z"
//                     fill="#59285F"
//                   />
//                   <path
//                     d="M32 20C25.37 20 20 25.37 20 32C20 38.63 25.37 44 32 44C38.63 44 44 38.63 44 32C44 25.37 38.63 20 32 20ZM32 40C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24C36.42 24 40 27.58 40 32C40 36.42 36.42 40 32 40Z"
//                     fill="#E6007E"
//                   />
//                   <path
//                     d="M32 28C29.79 28 28 29.79 28 32C28 34.21 29.79 36 32 36C34.21 36 36 34.21 36 32C36 29.79 34.21 28 32 28Z"
//                     fill="#59285F"
//                   />
//                 </svg>
//               </div>
//               <div className="text-[#333] leading-tight">
//                 <div className="font-bold text-sm">NATIONAL</div>
//                 <div className="font-bold text-sm">INSURANCE</div>
//                 <div className="font-bold text-sm">COMMISSION</div>
//               </div>
//             </div>

//             {/* Go Back and Notification */}
//             <div className="flex items-center gap-3">
//               <GoBack />
//               <div className="relative">
//                 <div className="w-12 h-12 rounded-full border border-[#59285F] flex items-center justify-center">
//                   <Bell className="w-6 h-6 text-[#59285F]" />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
//                   1
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Separator className="w-full" />
//         {children}
//       </div>
//     </div>
//   );
// }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#59285F] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl h-[90vh] rounded-3xl border-4 bg-white overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white p-6 pb-0 md:p-8 md:pb-0">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                {/* Your SVG Logo */}
                {/* ... */}
              </div>
              <div className="text-[#333] leading-tight">
                <div className="font-bold text-sm">NATIONAL</div>
                <div className="font-bold text-sm">INSURANCE</div>
                <div className="font-bold text-sm">COMMISSION</div>
              </div>
            </div>

            {/* Go Back and Notification */}
            <div className="flex items-center gap-3">
              <GoBack />
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-[#59285F] flex items-center justify-center">
                  <Bell className="w-6 h-6 text-[#59285F]" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
                  1
                </div>
              </div>
            </div>
          </div>
          <Separator className="w-full mt-6" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
}
