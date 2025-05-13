import { useGetComplaintStatusesByTicketNumberLazyQuery } from "@/graphql/generated";
import { COMPLAINT_STATUSES, getStatusIcon } from "@/lib/constant";
import { ComplaintStatusSubtext, EComplaintStatuses } from "@/lib/state";
import { cn } from "@/lib/utils";

type StatusGuideProps = {
  activeStatus?: string | EComplaintStatuses;
  created_at?: any;
  allStatusesData?: any[];
};

const StatusGuide: React.FC<StatusGuideProps> = ({
  activeStatus,
  created_at,
  allStatusesData,
}) => {
  console.log("all statuses data", allStatusesData);
  const activeIndex = activeStatus
    ? COMPLAINT_STATUSES.indexOf(activeStatus as EComplaintStatuses)
    : -1;

  return (
    <div className="bg-white p-6 rounded-[28px]">
      <h2 className="text-xl grid place-content-center font-semibold text-primaryLight mb-6 bg-customCard rounded-[28px] p-6">
        Complaint Status Guide
      </h2>

      <div className="relative">
        {COMPLAINT_STATUSES.map((v, index) => {
          let iconStatus: "default" | "active" | "completed" = "default";

          if (index === activeIndex) {
            iconStatus = "active";
          } else if (index < activeIndex) {
            iconStatus = "completed";
          }

          // Determine line color
          const lineColor =
            iconStatus === "completed"
              ? "bg-[#378F3D]"
              : iconStatus === "active"
              ? "bg-gray-200"
              : "bg-gray-200";

          return (
            <div key={v} className="flex items-start mb-8 relative">
              {/* Vertical line segment below the icon */}
              {index < COMPLAINT_STATUSES.length - 1 && (
                <div
                  className={cn(
                    "absolute left-6 top-12 h-full w-0.5",
                    lineColor
                  )}
                />
              )}

              {/* Status icon */}
              <div
                className={cn(
                  "shrink-0 rounded-full h-12 w-12 flex items-center justify-center z-10",
                  iconStatus === "active" &&
                    activeStatus !== EComplaintStatuses.resolved &&
                    "bg-primary text-white",
                  iconStatus === "active" &&
                    activeStatus === EComplaintStatuses.resolved &&
                    "bg-[#378F3D] text white",
                  iconStatus === "completed" &&
                    "bg-[#DFEDE0] border-2 border-[#378F3D]",
                  iconStatus === "default" &&
                    "border-2 border-[#59285F] bg-white"
                )}
              >
                {getStatusIcon(v as EComplaintStatuses, {
                  iconStatus,
                })}
              </div>

              {/* Status text */}
              <div className="ml-4 flex-1">
                <div
                  className={cn(
                    activeStatus === v && "flex items-center justify-between",
                    iconStatus === "active" &&
                      activeStatus !== EComplaintStatuses.resolved &&
                      "font-semibold text-[#59285F]",
                    iconStatus === "active" &&
                      activeStatus === EComplaintStatuses.resolved &&
                      "font-semibold text-[#378F3D]"
                  )}
                >
                  <h3>{v}</h3>
                  {activeStatus === v && <p>{created_at}</p>}
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {ComplaintStatusSubtext[v]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatusGuide;
