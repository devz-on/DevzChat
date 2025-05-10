import { axiosInstance } from "../lib/axios";

export const deleteMessage = async (id) => {
  const response = await axiosInstance.delete(`/messages/${id}`);
  return response.data;
};
