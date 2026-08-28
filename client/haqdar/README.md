# HaqDar — Frontend

HaqDar is a web application that helps users **find government schemes based on their eligibility**.

This folder contains the **frontend of HaqDar**, built with React and Vite.

## ✨ Features

* 🔐 User Authentication
* 🔑 Google Login
* 👤 User Profile
* 📝 Eligibility Profile Wizard
* 🎯 Personalized Scheme Recommendations
* 🔎 Browse Government Schemes
* 📄 Scheme Details
* 💾 Save Schemes
* 🤖 AI Scheme Assistant
* 💬 Feedback System
* 🌓 Dark / Light Mode
* 📱 Responsive Design
* 👨‍💼 Admin Dashboard
* 🏛️ Scheme Management
* 💬 Admin Feedback Management

## 🛠️ Tech Stack

* **React 19**
* **Vite**
* **JavaScript**
* **React Router**
* **Axios**
* **Tailwind CSS**
* **Material UI**
* **Lucide React**
* **React Icons**
* **Leaflet / React Leaflet**
* **Sonner**
* **SweetAlert2**
* **Google OAuth**

## 📁 Project Structure

```text
src/
├── Admin/              # Admin dashboard & management
├── Components/         # Reusable UI components
├── Pages/              # Application pages
├── Services/           # API service functions
├── security/           # Protected routes
├── utils/              # Helper functions
├── assets/             # Images & static assets
├── App.jsx             # Main routes
└── main.jsx            # Application entry point
```

## 🔄 How It Works

```text
User
  ↓
Create Account / Login
  ↓
Complete Eligibility Profile
  ↓
Get Matched Schemes
  ↓
Explore Scheme Details
  ↓
Save / Apply / Ask AI
```

## 🔐 Authentication

The frontend supports:

* Email authentication
* Google OAuth
* Protected user routes
* Protected admin routes

> Authentication and authorization are ultimately handled by the backend.

## 🤖 AI Assistant

HaqDar includes an AI assistant that helps users:

* Understand government schemes
* Ask questions about eligibility
* Get simpler explanations
* Explore scheme-related information

## 🎯 Scheme Matching

Users complete their profile with relevant eligibility information.

The frontend then displays schemes recommended for the user's profile through the backend recommendation system.

## 👨‍💼 Admin Panel

The frontend also includes an admin interface for:

* Managing schemes
* Adding schemes
* Viewing feedback
* Managing application data

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MohammadMustafa23/HaqDar-Web-App.git
```

### 2. Go to the frontend

```bash
cd HaqDar-Web-App/client/haqdar
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file and add the required frontend environment variables.

Example:

```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_BACKEND_URL=your_backend_api_url
```

### 5. Start the development server

```bash
npm run dev
```

## 📦 Build for Production

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🌐 Backend

This frontend communicates with the **HaqDar backend** for authentication, schemes, recommendations, AI, feedback, and other application features.

For the complete project, visit:

**[HaqDar Web App](https://github.com/MohammadMustafa23/HaqDar-Web-App)**

## 👨‍💻 Author

**Mohammad Mustafa**

B.Tech CSE Student

---

<p align="center">
  Built with ❤️ for easier access to government schemes.
</p>
