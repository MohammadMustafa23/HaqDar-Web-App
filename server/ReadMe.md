# HaqDar — Backend

The backend API for **HaqDar**, a platform that helps users discover government schemes based on their eligibility.

It handles authentication, user profiles, scheme data, personalized recommendations, AI assistance, admin operations, and data management.

## ✨ Features

* 🔐 JWT Authentication
* 🔑 Google OAuth
* 👤 User & Profile Management
* 🎯 Scheme Recommendation System
* 🤖 AI Scheme Assistant
* 🔎 Scheme Search & Details
* 💾 Saved Schemes
* 💬 Feedback Management
* 👨‍💼 Admin APIs
* 📄 PDF Generation
* ⚡ Redis Caching
* 🗄️ MongoDB Database
* 🧠 Pinecone Vector Search
* 🛡️ Rate Limiting & Validation

## 🛠️ Tech Stack

* **Node.js**
* **Express 5**
* **MongoDB + Mongoose**
* **Redis**
* **Google Gemini**
* **Pinecone**
* **JWT**
* **Google OAuth**
* **bcrypt**
* **Express Validator**
* **Multer**
* **PDFKit**

## 🔄 Backend Flow

```text
                         ┌──────────────┐
                         │   Frontend   │
                         └──────┬───────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Express API   │
                       └────────┬────────┘
                                │
                ┌───────────────┼───────────────┐
                ▼               ▼               ▼
         ┌────────────┐  ┌────────────┐  ┌────────────┐
         │ Middleware │  │ Controllers│  │   Routes   │
         └────────────┘  └─────┬──────┘  └────────────┘
                               │
                 ┌─────────────┼─────────────┐
                 ▼             ▼             ▼
            ┌─────────┐   ┌─────────┐   ┌─────────┐
            │ MongoDB │   │  Redis  │   │   AI    │
            └─────────┘   └─────────┘   └────┬────┘
                                             │
                                             ▼
                                        ┌──────────┐
                                        │ Pinecone │
                                        └──────────┘
```

## 🧠 Recommendation Flow

```text
User Profile
     │
     ▼
Eligibility Data
     │
     ▼
Recommendation API
     │
     ├──────────────► Redis Cache
     │
     ▼
Pinecone / Scheme Data
     │
     ▼
Matched Schemes
     │
     ▼
Frontend
```

## 🤖 AI Flow

```text
User Question
      │
      ▼
   API Route
      │
      ▼
 AI Service
      │
      ├──────► Pinecone
      │
      ▼
 Gemini Model
      │
      ▼
 AI Response
      │
      ▼
   Frontend
```

## 🔐 Authentication Flow

```text
Register / Login
       │
       ▼
 Authentication API
       │
       ├── Email / Password
       │
       └── Google OAuth
       │
       ▼
     JWT Token
       │
       ▼
 Protected API
       │
       ▼
 Auth Middleware
       │
       ▼
 Controller
```

## 📁 Project Structure

```text
server/
│
├── src/
│   ├── Admin/          # Admin functionality
│   ├── common/         # Common backend logic
│   ├── config/         # Database, Redis & app config
│   ├── controllers/    # Request handling
│   ├── data/           # Application data
│   ├── middlewares/    # Auth, validation & protection
│   ├── models/         # Mongoose models
│   ├── pdf/            # PDF generation
│   ├── routes/         # API routes
│   ├── scripts/        # Backend scripts
│   ├── services/       # AI & external services
│   ├── utils/          # Helper functions
│   └── app.js          # Express application
│
├── assets/             # Backend assets
├── server.js           # Server entry point
└── package.json
```

## 🗄️ Data & Services

### MongoDB

Stores application data such as:

* Users
* Profiles
* Schemes
* Saved schemes
* Feedback
* Other application records

### Redis

Used for fast temporary data and caching.

Examples include:

* Authentication-related data
* OTP data
* Cached recommendations
* Frequently requested data

### Pinecone

Used for vector-based search and AI-powered scheme matching.

### Gemini

Used for AI-powered features such as the HaqDar scheme assistant.

---

## 🛡️ Backend Security

The backend includes:

* JWT authentication
* Google OAuth verification
* Password hashing with bcrypt
* Protected routes
* Admin authorization
* Request validation
* Rate limiting
* CORS configuration
* Secure environment variables

## 📡 API Architecture

```text
Request
  │
  ▼
Route
  │
  ▼
Middleware
  │
  ├── Authentication
  ├── Authorization
  ├── Validation
  └── Rate Limit
  │
  ▼
Controller
  │
  ▼
Service / Model
  │
  ▼
Database / External Service
  │
  ▼
Response
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MohammadMustafa23/HaqDar-Web-App.git
```

### 2. Go to the backend

```bash
cd HaqDar-Web-App/server
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server` folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_url
REDIS_URL=your_redis_url

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key
PINECONE_API_KEY=your_pinecone_api_key
```

Add any other environment variables required by your deployment configuration.

> Never commit your real API keys, database URLs, or secrets.

## ▶️ Run Locally

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The backend entry point loads the environment, connects MongoDB and Redis, and starts the Express server.

## 🔗 Frontend

The backend provides APIs consumed by the HaqDar React frontend.

```text
┌───────────────┐
│ React Frontend│
└───────┬───────┘
        │
        │ HTTP / API
        ▼
┌───────────────┐
│ Express Server│
└───────┬───────┘
        │
   ┌────┼────┬─────────┐
   ▼    ▼    ▼         ▼
 Mongo Redis Gemini  Pinecone
```

## 📌 Main Responsibilities

| Area            | Backend Responsibility                    |
| --------------- | ----------------------------------------- |
| Authentication  | Login, registration, OAuth, JWT           |
| Users           | Profile & account data                    |
| Schemes         | Create, update, retrieve & manage schemes |
| Recommendations | Find relevant schemes                     |
| AI              | Scheme-related AI assistance              |
| Saved Schemes   | Save and retrieve schemes                 |
| Feedback        | Store and manage feedback                 |
| Admin           | Administrative operations                 |
| Cache           | Improve API performance                   |
| PDF             | Generate scheme-related documents         |

## 📂 Backend Modules

```text
Routes
  ↓
Controllers
  ↓
Services
  ↓
Models / External APIs
  ↓
MongoDB / Redis / Pinecone / Gemini
```

This separation keeps API routes, business logic, database operations, and external services organized and easier to maintain.

## 🚧 Project Status

HaqDar is an actively developed project.

The backend is continuously being improved with new features, performance improvements, and better AI-powered scheme discovery.

## 👨‍💻 Author

**Mohammad Mustafa**

B.Tech CSE Student

---

<p align="center">
  Built with ❤️ for easier access to government schemes.
</p>
