import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
  getAllPosts: async () => {
    let response = await axiosInstance.get("/posts");
    return response.data;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await axiosInstance.post("posts", {
      title,
      body,
      userId,
    });
    return response.data;
  },
};
