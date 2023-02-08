import { api } from "../api";


/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const getCurrentUser = async () => {

  const response = await api.get("auth/currentUser");
  console.log(response);
  return response.data;
};