# Backend Assignment

A backend system for collecting and analyzing activity logs from a static json file.  
Built using **Python (ETL)**, **PostgreSQL**, **NestJS**, and **Docker**.

---

## 🧩 Tech Stack

- 🐍 Python (ETL)
- 🐘 PostgreSQL
- ⚡ NestJS (Node.js, TypeScript, TypeORM)
- 🐳 Docker + Docker Compose

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone https://github.com/pegion33/backend-assignment.git

cd backend-assignment

### 2. Start the Stack

docker-compose up --build

This will spin up:

PostgreSQL database on localhost:5432

NestJS API on localhost:3000

Python ETL

---

🔌 API Endpoints

| Method | Endpoint                | Description                              |
| ------ | ----------------------- | ---------------------------------------- |
| GET    | `/users/:id/activities` | Returns user's events grouped by course  |
| GET    | `/courses/:id/stats`    | Total events and average lesson duration |
| GET    | `/lessons/popular`      | Top 3 lessons by event count             |

---

📜 Database Schema
PostgreSQL schema:

users(id INT PRIMARY KEY, name TEXT)

courses(id TEXT PRIMARY KEY, title TEXT)

lessons(id TEXT PRIMARY KEY, title TEXT)

events(

  id SERIAL PRIMARY KEY,
  
  event_id TEXT,
  
  timestamp TIMESTAMPTZ,
  
  action TEXT,
  
  user_id INT REFERENCES users(id),
  
  course_id TEXT REFERENCES courses(id),
  
  lesson_id TEXT REFERENCES lessons(id),
  
  duration_minutes INT
  
)


---

📖 Swagger API Docs
Once running, access:

http://localhost:3000/api-docs

---

✅ Features
🧼 Clean ETL pipeline with validation and normalization

📊 Aggregated analytics endpoints

🚀 Fast, RESTful API with NestJS

🔒 Structured with TypeORM and dependency injection

🐳 Fully dockerized setup

---

🛠️ Improvements (With More Time)

Better ETL data Validation Logics

PostgreSQL indexing for faster joins

Authentication with JWT or API key

Pagination and filtering in API



