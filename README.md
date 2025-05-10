# 🏏 Basic Activity Booking App - Backend API

This is a RESTful API built for a basic **Activity Booking App**, as part of the **MeetX Backend Developer Internship Assignment**.

The API supports user registration, authentication using JWT, public activity listing, activity booking, and retrieving a logged-in user's bookings.

---

## 🚀 Live Demo (Optional)
> 🔗 [API Live on Render](https://meetx-nodejs.onrender.com)

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JWT (JSON Web Token)  
- **Security**: Passwords hashed using `bcrypt`  
- **API Testing**: Postman  

---

## 📁 Folder Structure

```
.
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── activityController.js
│   └── bookingController.js
├── middlewares/
│   └── auth.js
├── models/
│   ├── User.js
│   ├── Activity.js
│   └── Booking.js
├── routes/
│   ├── userRoutes.js
│   ├── activityRoutes.js
│   └── bookingRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## 🔐 Authentication

JWT-based authentication is used.

After login, use the token in the `Authorization` header as:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📮 API Endpoints

### 👤 1. User APIs

#### ➤ POST `/api/v1/signup`

Register a new user

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "secure123"
}
```

---

#### ➤ POST `/api/v1/login`

Log in and receive JWT token

**Body:**

```json
{
  "email": "john@example.com",
  "password": "secure123"
}
```

---

### 🎯 2. Activity APIs

#### ➤ GET `/api/v1/listActivities`

Publicly accessible list of available activities.

---

### 📅 3. Booking APIs

#### ➤ POST `/api/v1/book-activity`

Book an activity (Authenticated users only)

**Header:**

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

**Body:**

```json
{
  "activityId": "ACTIVITY_OBJECT_ID"
}
```

---

#### ➤ GET `/api/v1/get-my-booking`

Get all activities booked by the current user

**Header:**

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## ✅ Bonus Features Implemented

- ✅ Password hashing with `bcrypt`
- ✅ Clean code with modular structure
- ✅ JWT-based authentication
- ✅ Postman Collection included
- ✅ MongoDB integration with Mongoose

---

## 📬 Postman Collection

✅ Download: [`Activity-Booking-App.postman_collection.json`](https://.postman.co/workspace/My-Workspace~f1bbd292-e863-415a-8971-fc1f3605013b/collection/37968337-4fc0f524-4df8-428b-8040-5e31c2ec835a?action=share&creator=37968337)

---

## ✨ Future Improvements

- Admin panel for activity management
- Email notifications
- Pagination & filters
- Rate limiting & sanitization
- Unit testing

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js
- MongoDB (Local or Atlas)
- Postman

---

### 📥 Clone the Repository

```bash
git clone https://github.com/yourusername/activity-booking-api.git
cd activity-booking-api
```

---

### 📦 Install Dependencies

```bash
npm install
```

---

### ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

### ▶️ Start the Server

```bash
node server.js
# OR with nodemon
npx nodemon server.js
```

Server running at `http://localhost:5000`

---

## 📧 Contact

Created with ❤️ by **Ayush Rajput**  
📧 Email: rajputayush694@gmail.com  

---
