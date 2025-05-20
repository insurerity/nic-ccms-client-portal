import { useGetRegions } from "@/hooks/use-get-regions";
import { useGetRegulatedEntities } from "@/hooks/use-get-regulated-entities";
import { camelCaseToTitle } from "@/lib/utils";
import { format } from "date-fns";

type InfoDisplayProps = {
  data: Record<string, any>;
};

export const InfoDisplay = ({ data }: InfoDisplayProps) => {
  const { offices } = useGetRegions();
  const { entities } = useGetRegulatedEntities();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.entries(data)?.map(([key, value]) => {
        let val = value;
        if (key === "region") {
          const selectedOffice = offices.find((office) => office.id === val);
          val = selectedOffice?.label;
        } else if (key === "entityOfConcern") {
          const selectedOffice = entities.find((office) => office.id === val);
          val = selectedOffice?.label;
        } else if (key === "dateOfIncident") {
          const formatted = format(new Date(value), "M/d/yyyy");
          val = formatted;
        }
        return (
          <div key={key}>
            <p className="text-sm text-gray-500">{camelCaseToTitle(key)}</p>
            <p className="text-base font-medium text-black">
              {String(val) || "—"}
            </p>
          </div>
        );
      })}
    </div>
  );
};
