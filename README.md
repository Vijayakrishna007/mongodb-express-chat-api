# Simple Chat Website with MongoDB and Express.js

This repository contains the source code for a simple chat website built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**. The app allows users to create, view, edit, and delete chat messages.

---

##  Features

- RESTful CRUD operations for chats
- View all chats on one page
- Add a new chat
- Edit an existing chat message
- Delete a chat
- Persistent data storage using MongoDB

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript templates)
- Method-Override (to support PUT & DELETE requests)
- CSS for basic styling

---

##  Getting Started

### 1. Clone the Repository
git clone <repository_url> 
cd mongodb_with_express
### 2. Install Dependencies
npm install
### 3. Configure MongoDB
Ensure MongoDB is running locally or update the connection string in index.js:
mongoose.connect("mongodb://localhost:27017/chatApp")
### 4. Initialize the Database
To insert initial data into your MongoDB collection : &nbsp;
node init.js
### 5. Start the Server
npm start
### 6. Access the Application
Visit: http://localhost:8080/chats
# Project Structure


├── init.js      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      # Script to insert initial chat data <br>
├── index.js      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;     # Main application entry point with routes <br>
├── models/ <br>
│   └── chat.js      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   # Mongoose schema/model for chat messages <br>
├── views/ <br>
│   ├── edit/        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   # EJS template for editing a chat <br>
│   ├── index.ejs    &nbsp; &nbsp;&nbsp;  # Template for listing all chats  <br>
│   └── new.ejs        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; # Template for adding a new chat   <br>
├── public/  <br>
│   └── style.css     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  # Basic CSS styling <br>
├── package.json <br>
└── README.md