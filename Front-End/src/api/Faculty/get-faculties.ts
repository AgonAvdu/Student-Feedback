import { api } from "../../api";

export const getFaculties = async () => {
  const response = await api.get(`faculties`);

  return response.data;
};
