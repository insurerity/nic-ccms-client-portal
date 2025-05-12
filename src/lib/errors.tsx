"use client";

import { toast } from "sonner";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

type ToastType = "success" | "error" | "warning";

interface ErrorToastProps {
  type?: ToastType;
  title: string;
  description?: string;
  ticketId?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function showCustomToast({
  type = "success",
  title,
  description,
  ticketId,
  actionLabel,
  onAction,
}: ErrorToastProps) {
  toast.custom((t) => (
    <div
      className={`${
        //@ts-ignore
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="w-full p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {type === "success" && (
              <div className="w-8 h-8 text-purple-700">
                <CheckCircle className="w-full h-full" strokeWidth={2} />
              </div>
            )}
            {type === "error" && (
              <div className="w-8 h-8 text-red-600">
                <XCircle className="w-full h-full" strokeWidth={2} />
              </div>
            )}
            {type === "warning" && (
              <div className="w-8 h-8 text-amber-500">
                <AlertCircle className="w-full h-full" strokeWidth={2} />
              </div>
            )}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
            {ticketId && (
              <p className="mt-1 text-xs text-gray-500">
                Ticket: <span className="font-medium">{ticketId}</span>
              </p>
            )}
            {actionLabel && (
              <div className="mt-3">
                <button
                  onClick={onAction}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  {actionLabel}
                </button>
              </div>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              //@ts-ignore
              onClick={() => toast.dismiss(t.id)}
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
}
