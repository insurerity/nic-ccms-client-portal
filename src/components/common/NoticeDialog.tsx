"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "../ui/dialog";
import { X } from "lucide-react";
import { useComplaintStore, useNoticeDialog, useSharedStore } from "@/hooks/use-complaint-store";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";


export const NoticeDialog = () => {
  const { showDialog, dialogOpen: open, closeDialog } = useNoticeDialog();

  const { reset } = useComplaintStore();
  const { reset: resetSharedStore } = useSharedStore();
  const pathname = usePathname();
  const router = useRouter();

  const setOpen = () => {
    if (open) {
      return closeDialog();
    } else {
      showDialog();
    }
  };

  const close = () => {
      reset();
      closeDialog();
      resetSharedStore();
      return router.push("/get-started") ;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="[&>button:last-child]:hidden rounded-xl">
        <DialogHeader>
          <DialogTitle>
            {" "}
            <div className="text-xl py-4 bg-primaryLight rounded-[12px] font-bold text-center text-white flex items-center justify-between px-5">
              <p> Close Form?</p>
              <X
                className="border rounded-full p-1 "
                size={30}
                onClick={closeDialog}
              ></X>
            </div>
          </DialogTitle>
          <DialogDescription className="text-lg text-center ">
            All entered data will be lost if you close this form. <br/> Do you wish to
            continue?
          </DialogDescription>
          <DialogFooter className="flex flex-row items-center justify-center" >
              <Button
                type="button"
                variant="outline"
                onClick={closeDialog}
                className="rounded-full px-8 border-gray-300 text-gray-700"
              >
                Cancel
              </Button>
               <Button
                type="button"
                variant="default"
                onClick={close}
                className="rounded-full px-8 border-gray-300 text-white hover:bg-primaryLight/85"
              >
                Yes
              </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
