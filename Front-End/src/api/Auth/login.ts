import { api } from "../api";

import { Login } from "../../types/Login";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const loginUser = async (data: Login) => {
  const form = new FormData();

  form.append("email", data.email!)
  form.append("password", data.password!)

  const response = await api.post("auth/login", data);

  return response.data;
};
