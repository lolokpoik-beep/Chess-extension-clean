# Chess.com Zen Pro

A Manifest V3 Chrome/Edge extension that adds a Lichess-inspired charcoal interface layer to Chess.com.

## Included

- Lichess-style dark visual layer
- Focus mode
- Hide Chat
- Hide Twitch/stream embeds
- Low-time warning and critical-clock styling
- Opponent W/D/L tracking in local storage
- Session Mode with game count/time-oriented controls
- Post-game Game Review shortcut
- Popup settings
- Options page and JSON data export

## Install

1. Open `chrome://extensions` or `edge://extensions`.
2. Enable Developer Mode.
3. Choose **Load unpacked**.
4. Select the repository root folder.

## Important

Chess.com changes its DOM over time. This extension therefore uses several selector families and MutationObserver-based detection instead of relying on a single fixed selector.

This extension does not provide live move suggestions or engine assistance during an active game.
