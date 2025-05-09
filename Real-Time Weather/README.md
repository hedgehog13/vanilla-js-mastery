# 🌤️ Vanilla JS Weather App Collection

This repository contains 5 small projects built with **Vanilla JavaScript (ES6+)** that demonstrate various advanced frontend features. Each app showcases modular architecture, API integration, UI interaction, and clean UX.

---

## 📦 Apps Included

1. **Weather App**

   * Real-time weather search using [WeatherAPI](https://www.weatherapi.com/)
   * Features autocomplete, loading states, caching, and animations
   * [Read More](./weather-app/README.md)

*Apps 2–5 will be added soon.*

---

## 🚀 Weather App Features

* 🔍 **Search Weather by City**

  * Uses WeatherAPI's current weather endpoint
* 🗂️ **Autocomplete Suggestions**

  * Matching cities appear while typing (≥ 3 chars)
  * Supports keyboard navigation (↑ ↓ Enter)
* 📥 **Local Cache**

  * In-memory cache avoids unnecessary requests
* 🔄 **Loading Spinner**

  * Smooth loading animation
* ❌ **Error Handling**

  * Alerts for input errors, missing cities, or fetch failures
* 💅 **UI Enhancements**

  * Shake animation for invalid input
  * Clean modular code using ES Modules

---

## 📁 Weather App Structure

```
/weather-app/
│
├── index.html
├── styles.css
├── main.js
│
└── modules/
    ├── fetchWeather.js      # Handles API call for weather
    ├── cache.js             # In-memory caching logic
    ├── ui.js                # UI logic (loading, error, render)
    └── autocomplete.js      # Suggestion API + rendering
```

---

## 🧪 Tech Used

* Vanilla JavaScript (ES6+)
* Fetch API
* WeatherAPI
* CSS Animations

---

## 🛠️ Setup

1. Get a free API key from [weatherapi.com](https://www.weatherapi.com/).
2. Replace `YOUR_API_KEY` in `autocomplete.js` and `fetchWeather.js`.
3. Open `index.html` in your browser.

---

## 📈 Learning Outcomes

* Modular ES6 JS architecture
* Handling external API calls
* Managing async behavior + user feedback
* Building a better UX with animations and validation
* Keyboard & UI-based autocomplete navigation

---

More apps coming soon!

Feel free to fork or contribute 👇
