const BASE = "https://jsonplaceholder.typicode.com";

export const api = {
  getAllPosts: async () => {
    let response = await fetch(`${BASE}/posts`);
    let json = await response.json();
    return json;
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await fetch(`${BASE}/posts`, {
      method: "POST",
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  },
};
