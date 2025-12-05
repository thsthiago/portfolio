import { api } from "@/lib/apiClient";

export async function sendMessage(
  name: string,
  email: string,
  message: string
) {
  const response = await api.post("/api/form", { name, email, message });
  return response.data;
}
