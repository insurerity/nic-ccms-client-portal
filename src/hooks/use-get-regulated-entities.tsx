import { useRegulatedEntitiesQuery } from "@/graphql/generated";
import { capitalize } from "@/lib/utils";

export const useGetRegulatedEntities = () => {
  const { data, loading } = useRegulatedEntitiesQuery();

  const entities = data
    ? data?.RegulatedEntity?.map((v) => ({
        id: v.id,
        type: v.entityType,
        label: capitalize(v.name),
      }))
    : [];

  return {
    loadingEntities: loading,
    entities,
  };
};
