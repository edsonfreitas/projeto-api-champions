# API League ⚽

REST API built with **Express 5**, **TypeScript**, and **CORS** to manage players and clubs data.

---

## 🚀 Technologies

- Node.js
- Express 5
- TypeScript
- CORS
- TSX
- Tsup

---

## 📁 Project Structure
src/
├── controllers/
│ ├── players-controller.ts
│ └── clubes-controller.ts
├── routes.ts
├── server.ts
└── app.ts

---

## ⚙️ Application Setup

The application is created using a factory function that:

- Enables JSON parsing
- Registers API routes under `/api`
- Enables CORS for cross-origin requests

Base route:

/api

---

## 📌 Available Endpoints

### 🎮 Players

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | `/api/players` | Get all players |
| GET | `/api/players/:id` | Get player by ID |
| POST | `/api/players` | Create a new player |
| PATCH | `/api/players/:id` | Update a player |
| DELETE | `/api/players/:id` | Delete a player |

---

### 🏆 Clubs

| Method | Endpoint | Description |
|--------|----------|------------|
| GET | `/api/clubs` | Get all clubs |

---

## 🛠️ Scripts
Development mode

npm run start:dev

Watch mode (auto-reload)

npm run start:watch

Build project

npm run dist

Build and run production

npm run start:dist


---

## 📦 Installation

1. Clone the repository:
git clone <your-repository-url>


2. Install dependencies:
npm install

3. Run in development mode:
npm run start:dev

---

## 🌍 CORS

CORS is enabled globally using the `cors` middleware, allowing cross-origin requests.

---

## 📄 License

ISC



