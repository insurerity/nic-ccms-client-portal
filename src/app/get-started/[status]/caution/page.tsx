import BigBellIcon from "@/components/icons/BigBellIcon";
import { Button } from "@/components/ui/button";
import CautionNotice from "../components/CautionNotices";

export default function Caution() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 flex flex-col items-center">
      {/* <BigBellIcon />

      <h1 className="text-3xl font-bold text-center mb-6">Caution!</h1>

      <p className="text-xl text-center mb-8">
        Have you already informed your insurance company about the issue you
        want to report?
      </p>

      <p className="text-gray-700 text-center mb-10">
        Please note that you must notify the insurance company involved before
        submitting your complaint to the NIC.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Button className="bg-[#59285F] hover:bg-purple-900 text-white py-6 px-8 rounded-full  text-lg">
          No, I haven't yet.
        </Button>

        <Button
          variant="outline"
          className="border-purple-800  hover:bg-purple-50 py-6 px-8 rounded-full text-lg text-primary"
        >
          Yes, I have notified them.
        </Button>
      </div> */}

      <CautionNotice />
    </div>
  );
}
