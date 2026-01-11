# Expense Tracker

A simple expense tracker application with MERN stack backend and HTML frontend.

## Features

- User registration and login with JWT authentication
- Add expenses for today or custom dates
- View personal expenses in a table with total sum
- Secure, user-specific data

## Setup

### Backend

1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Set up MongoDB (local or Atlas) and update .env
4. Run: `npm start` or `npm run dev`

### Frontend

The frontend is served by the backend on the same port. Open browser to http://localhost:5000

## API Endpoints

- POST /api/auth/register
- POST /api/auth/login
- POST /api/expenses (protected)
- GET /api/expenses (protected)

## Architecture

- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Frontend: HTML, CSS, Vanilla JS
- Authentication: JWT middleware
- Database: User and Expense models with relations
