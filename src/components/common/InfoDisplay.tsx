import { camelCaseToTitle } from "@/lib/utils";

type InfoDisplayProps = {
  data: Record<string, any>;
};

export const InfoDisplay = ({ data }: InfoDisplayProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.entries(data).map(([key, value]) => (
        <div key={key}>
          <p className="text-sm text-gray-500">{camelCaseToTitle(key)}</p>
          <p className="text-base font-medium text-black">
            {String(value) || "—"}
          </p>
        </div>
      ))}
    </div>
  );
};
