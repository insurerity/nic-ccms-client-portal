
import { capitalize } from "@/lib/utils";
import { useEntities } from "./useApi";

export const useGetRegulatedEntities = () => {
 
 
     const {data: entities, loading} = useEntities()
 
     const transformedEntities = entities?.map((v) => ({
       ...v,
       label: capitalize(v.name)
     }))
  return {
    loadingEntities: loading,
    entities: transformedEntities ?? [],
  };
};
