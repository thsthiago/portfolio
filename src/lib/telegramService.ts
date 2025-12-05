import axios, { AxiosInstance } from "axios";
import { api } from "./apiClient";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

class TelegramService {
  private readonly service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  async sendMessage(chatId: string, message: string) {
    const response = await this.service.post(
      `${process.env.TELEGRAM_API_URL}/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      { chat_id: chatId, text: message, parse_mode: "Markdown" }
    );

    return response.data;
  }
}

const telegramService = new TelegramService(api);
export default telegramService;
