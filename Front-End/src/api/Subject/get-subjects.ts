import { api } from "..";

export const getSubjects = async () => {
  const response = await api.get(`subjects`);

  return response.data;
};
