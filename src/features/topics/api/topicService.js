import api from "@/api/axios";

export async function getTopics({ page = 0, size = 10 } = {}) {
  const response = await api.get("/topicos", {
    params: {
      page,
      size,
    },
  });

  return response.data;
}
