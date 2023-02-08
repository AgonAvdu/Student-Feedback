import { api } from "..";

export const getSubject = async (id: number) => {
  const response = await api.get(`subjects/${id}`);
  return response.data;
};
