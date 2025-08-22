# Campus Placement Automation System

This is a **Full Stack Campus Placement Automation System** built using **Node.js (Express) + MySQL** for backend and **React.js** for frontend.  
It automates student placements: students can sign up, apply for jobs, and admins can manage job postings and placement rounds.

---

## 🚀 Tech Stack

- **Frontend:** React.js, React Router, Axios  
- **Backend:** Node.js, Express.js, JWT Authentication, MySQL  
- **Database:** MySQL  
- **Other:** bcrypt.js, dotenv, CORS  

---

## 📂 Project Structure

placement-system/
│
├── backend/ # Express + MySQL API
│ ├── config/ # DB connection
│ ├── controllers/ # Business logic
│ ├── middleware/ # Auth middleware
│ ├── routes/ # API routes
│ ├── .env # Environment variables (NOT pushed to GitHub)
│ ├── server.js # Backend entry point
│ └── package.json
│
└── frontend/ # React UI
├── public/ # Static files
├── src/ # React components & pages
├── package.json

---

## ⚙️ Installation & Setup

# 1. Clone the Repository
```bash
git clone https://github.com/your-username/placement-system.git
cd placement-system

#Backend Setup
cd backend
npm install

#Create a .env file in backend folder:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=placement_system
JWT_SECRET=your_jwt_secret

#Start backend server:

npm start
Backend will run on: http://localhost:5000

#3. Frontend Setup

cd frontend
npm install

#Start frontend server:

npm start

Frontend will run on: http://localhost:3000

#🔑 Features

-- **Student**

-- Signup / Login

-- Browse jobs

-- Apply for jobs

-- **Admin**

-- Post new jobs

-- Manage student applications

-- View placement stats

-- **Security**

-- JWT-based authentication

-- Passwords encrypted with bcrypt


#📜 License

--- This project is for educational purposes. ---