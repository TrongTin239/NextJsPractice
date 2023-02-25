import { LoginPayload } from "pages/models/index.page";
import { axiosClient } from "./axiosClinet";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },
  logout() {
    return axiosClient.post("/logout");
  },
  getProfile() {
    return axiosClient.get("profile");
  },
};
