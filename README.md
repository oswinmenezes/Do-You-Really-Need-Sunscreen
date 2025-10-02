🌞 Sunscreen Advisory Web App

This is a simple web application that helps users decide **whether sunscreen is necessary** based on the **UV index** in their location.

## ✨ Features

* Enter a **city name** to automatically fetch latitude & longitude.
* OR manually enter **latitude and longitude** values.
* Fetches **real-time UV data** using the [OpenUV API](https://www.openuv.io/).
* Displays:

  * Current UV Index
  * Peak UV Index of the day
  * A verdict: *"Wear Sunscreen"* or *"Sunscreen Not Required"*

## 🛠️ Tech Stack

* **Node.js** with **Express.js**
* **EJS** for templating
* **Axios** for API requests
* **OpenUV API** for UV data
* **Geocoding API** for city-to-coordinates lookup

## 🚀 How to Run

1. Clone this repository:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in the root folder and add:

   ```env
   PORT=3000
   API_KEY=your_openuv_api_key
   API_KEY_CITY=your_geocoding_api_key
   ```
4. Start the server:

   ```bash
   nodemon index.js
   ```
5. Open in browser:

   ```
   http://localhost:3000
   ```

## 📷 Usage

* Enter **city name** OR **latitude & longitude**.
* Click **Check**.
* The app shows whether you need sunscreen today.
