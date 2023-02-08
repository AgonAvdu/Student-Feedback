import { api } from "../api";

import { Login } from "../../types/Login";
import { Register } from "../../types/Register";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const registerUser = async (data: Register) => {

  const form = new FormData();
  form.append("name", data.name!);
  form.append("surname", data.surname!);
  form.append("gender", data.gender!);
  form.append("dateOfBirth", data.birthDate?.toString()!);
  form.append("email", data.email!);
  form.append("password", data.password!);
  form.append("facultyId", data.faculty!);
  form.append("role", data.type!);
  if (data.type === "Teacher") {
    data.subjects!.forEach((subject) => {
      form.append("subjectIds", subject);
    });
  }


  const response = await api.post("auth/register", form);
  console.log(response);
  return response.data;
};
