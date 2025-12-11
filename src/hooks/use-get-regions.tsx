
import { useOffices } from "./useApi";
import { capitalize } from "@/lib/utils";

export const useGetRegions = () => {
   const {data: offices, loading} = useOffices()
  
      const transformedOffices = offices?.map((v) => ({
        ...v,
        label: capitalize(v.name)
      }))
  
  
      

  return {
    offices: transformedOffices ?? [],
    loading,
  };
};
