# 🚀 User Activity Logging & Analytics API

A scalable backend system for tracking and analyzing user activity with secure authentication and real-time analytics.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## ✨ Features
- User Authentication (JWT-based)
- Activity Logging System
- RESTful API Design
- Filtering & Pagination
- Analytics using MongoDB Aggregation

---

## 📌 API Endpoints

### Auth
- POST /api/auth/register  
- POST /api/auth/login  

### Logs
- POST /api/logs  
- GET /api/logs  

### Analytics
- GET /api/analytics/daily  
- GET /api/analytics/users  

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/muskan_mishra24/user-activity-analytics-api.git
cd user-activity-analytics-api
npm install
npm run dev
