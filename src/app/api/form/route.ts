import telegramService from "@/lib/telegramService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await telegramService.sendMessage(
      process.env.TELEGRAM_CHAT_ID as string,
      `*Nova mensagem enviada através do portfólio:*\n\n*Nome:* ${name}\n*Email:* ${email}\n*Mensagem:*\n${message}`
    );
    return NextResponse.json(
      { message: "Mensagem enviada com sucesso" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Não foi possível enviar a mensagem" },
      { status: 500 }
    );
  }
}
