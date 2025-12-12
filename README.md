# Kayla Telegram Bot

A simple Telegram bot built with Node.js, Express, and Telegraf that demonstrates webhook-based bot communication.

## Features

- **Welcome Message**: Responds to `/start` command with a greeting
- **Echo Functionality**: Echoes back any text message sent by users
- **Automatic Webhook Setup**: Automatically configures Telegram webhook on server startup
- **Express Server**: Uses Express to handle webhook callbacks from Telegram

## Tech Stack

- **Telegraf**: Telegram bot framework for Node.js
- **Express**: Web server for handling webhook requests
- **Axios**: HTTP client for webhook setup
- **dotenv**: Environment variable management

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with:
   ```
   BOT_TOKEN=your_telegram_bot_token
   SERVER_URL=your_server_url
   PORT=3000
   ```

3. Start the bot:
   ```bash
   npm start
   ```

## Usage

Start chatting with the bot at: https://t.me/kayla_star_bot (bot server not hosted so doesn't work)
