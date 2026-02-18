import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json({
        success: false,
        error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID"
      })
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    const telegramResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML"
      })
    })

    const data = await telegramResponse.json()

    if (!data.ok) {
      return NextResponse.json({ success: false, error: data })
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}
