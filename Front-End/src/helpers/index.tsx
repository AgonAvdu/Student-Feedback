export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const getServerUrl = () => {
  return "https://localhost:5001/";

};

export const getApiUrl = () => {
  return getServerUrl() + "api/";
};