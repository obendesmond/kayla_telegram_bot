// @desc: This is the first version of the bot using axios to set the webhook and send messages


require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const { BOT_TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
const WEBHOOK_PATH = `/webhook/${BOT_TOKEN}`;
const TELEGRAM_WEBHOOK_URL = `${SERVER_URL}${WEBHOOK_PATH}`;
const PORT = 3000;

const init = async () => {
  const res = await axios.get(
    `${TELEGRAM_API_URL}/setWebhook?url=${TELEGRAM_WEBHOOK_URL}`
  );
  console.log(res.data);
};

app.post(WEBHOOK_PATH, async (req, res) => {
  const chatId = req.body.message.chat.id;
  const text = req.body.message.text;

  await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
    chat_id: chatId,
    text: text,
  });
  return res.send();
});

// Start the local server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Call init but don't let errors crash the server
  init().catch((err) => {
    console.error("init() failed:", err.response?.data || err.message || err);
  });
});
