
# Agent Backend Starter (Futures-only)

/api/agent endpoint для вашего фронта «Объёмы».

## Режимы работы
1. Rules-only (по умолчанию) — считает индикаторы на Binance Futures (15m свечи).
2. LLM mode — если задать `OPENAI_API_KEY`, дополнит совет рассуждением ChatGPT.

## Vercel
1. Залейте проект на Vercel.
2. В Environment Variables добавьте (опционально):
   - OPENAI_API_KEY
   - OPENAI_MODEL (например gpt-4o-mini)
3. Эндпоинт: https://<project>.vercel.app/api/agent?symbol=BTCUSDT

## Cloudflare Workers
1. Залейте worker.js и папку utils/ в Cloudflare Workers.
2. Добавьте переменные окружения (как выше).
3. Деплойте: wrangler deploy

## Формат ответа
```json
{
  "ok": true,
  "symbol": "BTCUSDT",
  "advice": {
    "side": "LONG|SHORT|NEUTRAL",
    "confidence": 0.0,
    "rationale": "string",
    "risk": { "sl": null, "tp": null }
  }
}
```

Собрано: 2025-09-25T13:42:07
