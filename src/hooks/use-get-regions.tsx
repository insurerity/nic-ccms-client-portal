import { useOfficesQuery } from "@/graphql/generated";

export const useGetRegions = () => {
  const { data, loading } = useOfficesQuery();

  const offices = data
    ? data?.Office?.filter(
        (v) => v.name.toLocaleUpperCase() !== "Head Office".toLocaleUpperCase()
      )?.map((v) => ({ id: v.id, label: v.name }))
    : [];

  return {
    offices,
    loading,
  };
};
