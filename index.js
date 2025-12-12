require('dotenv').config();
const { Telegraf } = require('telegraf');
const express = require('express');
const axios = require('axios'); // We use axios only for the initial webhook setup call

const app = express();
const PORT = 3000;
const WEBHOOK_PATH = '/webhook'; // This path is simpler
const TELEGRAM_WEBHOOK_URL = `${process.env.SERVER_URL}${WEBHOOK_PATH}`;

const bot = new Telegraf(process.env.BOT_TOKEN);

// --- Bot Logic (Telegraf style) ---
bot.start((ctx) => ctx.reply('Welcome! The telegraf bot is running.'));
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));
// Add more handlers here, e.g., bot.command('help', ...)

// --- Express Server Setup ---
// We tell express to route all requests hitting our WEBHOOK_PATH to telegraf's handler
app.use(bot.webhookCallback(WEBHOOK_PATH));

app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);

    // --- Automatic Webhook Setting using axios ---
    try {
        const setWebhookUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/setWebhook?url=${TELEGRAM_WEBHOOK_URL}`;
        const res = await axios.get(setWebhookUrl);
        console.log('Webhook setup response:', res.data);
    } catch (err) {
        console.error("Failed to set webhook:", err.response?.data || err.message);
    }
});
