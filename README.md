🩸 Blood Bank Management System
Project Overview
The Blood Bank Management System is a comprehensive full-stack application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It's designed to streamline and automate the operations of a blood bank, efficiently managing donor information, blood inventory, recipient requests, and overall blood donation processes, ensuring the timely availability of blood and ultimately saving lives.

This system aims to reduce manual effort, improve data accuracy, and provide a centralized, modern, and intuitive platform for managing critical blood bank operations.

✨ Features
Donor Management:
Register and manage donor profiles (personal details, blood group, contact info, medical history, last donation date).
Search and filter donors based on blood group, location, last donation date, etc.
Blood Inventory Management:
Track available blood units by blood group, component (e.g., Whole Blood, Plasma, Platelets), and expiry date.
Record incoming donations and outgoing issuances.
Automated alerts for low stock or expiring units to facilitate timely action.
Recipient Management:
Register and manage patient/recipient profiles.
Process blood requests and intelligently match with available inventory.
Donation Camps/Drives:
Schedule and manage blood donation camps, recording attendees and collected units.
User Authentication & Authorization:
Secure user registration and login functionality.
Role-based access control (e.g., Admin, Staff) to different functionalities.
Reporting & Analytics:
Generate various reports on donation history, current blood stock levels, and demand trends.
Visualize statistical insights on blood group availability and usage.
Intuitive UI/UX: A responsive and user-friendly interface for seamless interaction.
RESTful API: Robust backend API for efficient data handling.
🚀 Technologies Used
This project leverages the power of the MERN stack:

Frontend:
React.js: A declarative, component-based JavaScript library for building user interfaces.
Redux (Optional/If used): For predictable state management.
React Router: For declarative routing.
Axios: For making HTTP requests to the backend.
CSS Framework/Library: [e.g., Bootstrap, Material-UI, Tailwind CSS, or custom CSS]
Backend:
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js: A fast, unopinionated, minimalist web framework for Node.js.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
JWT (JSON Web Tokens): For secure user authentication.
Bcrypt.js: For password hashing.
Database:
MongoDB: A NoSQL database that provides high performance, high availability, and easy scalability.
⚙️ Getting Started
Follow these instructions to set up and run the Blood Bank Management System on your local machine for development and testing purposes.

Prerequisites
Ensure you have the following installed on your system:

Node.js (v14.x or higher recommended): https://nodejs.org/
npm (Node Package Manager) or Yarn (comes with Node.js installation)
MongoDB:
Install MongoDB locally: https://docs.mongodb.com/manual/installation/
OR, use a cloud-hosted MongoDB service like MongoDB Atlas: https://www.mongodb.com/cloud/atlas
Git
Installation
Clone the repository:

Bash

git clone https://github.com/[YourGitHubUsername]/blood-bank-management-system.git
cd blood-bank-management-system
Backend Setup:

Navigate into the server (or backend, api) directory:

Bash

cd server
Install backend dependencies:

Bash

npm install
# or yarn install
Create a .env file in the server directory and add your MongoDB connection string and JWT secret:

MONGO_URI=mongodb://localhost:27017/bloodbank_db # Or your MongoDB Atlas URI
JWT_SECRET=your_super_secret_jwt_key
PORT=5000 # Or any desired port for your backend
Replace bloodbank_db with your desired database name and your_super_secret_jwt_key with a strong, random string.

Run the Backend Server:

Bash

npm start
The backend API will start running on the port specified in your .env file (defaulting to http://localhost:5000).

Frontend Setup:

Open a new terminal window and navigate back to the project root, then into the client (or frontend, web) directory:

Bash

cd ../client
Install frontend dependencies:

Bash

npm install
# or yarn install
Ensure the Frontend can connect to the Backend: The frontend usually defaults to connecting to http://localhost:5000. If your backend is running on a different port, you might need to adjust the proxy setting in client/package.json or explicitly set the backend URL in your frontend code.

Look for "proxy": "http://localhost:5000" in client/package.json (if using Create React App).
Or, set an environment variable for the backend URL if your frontend build setup uses it (e.g., REACT_APP_API_URL=http://localhost:5000).
Run the Frontend Application:

Bash

npm start
The frontend application will typically open in your default web browser at http://localhost:3000.

🖥️ Usage
Access the application: Once both frontend and backend servers are running, open your web browser and navigate to http://localhost:3000.
Register/Login: As a new user, you can register an account. Upon successful registration, you can log in to the system.
Admin/Staff Interface:
If you have an admin account, you can manage donors, blood inventory, recipient requests, and view reports.
Explore different sections like "Donor Management," "Blood Stock," "Requests," and "Reports" to interact with the system's functionalities.
Donor/Recipient Interface: (If applicable) If your system has separate interfaces for donors or recipients, describe how they can access and use their respective features (e.g., view donation history, request blood).
