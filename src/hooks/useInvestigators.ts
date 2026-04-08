import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { Investigator } from "../types/investigator";

const fetchInvestigators = async (): Promise<Investigator[]> => {
  const res = await api.get("/investigators");
  return res.data;
};

export const useInvestigators = () => {
  return useQuery({
    queryKey: ["investigators"],
    queryFn: fetchInvestigators,
  });
};
