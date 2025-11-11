RealTimeEdify is a real-time collaborative document editing web application built using the MERN stack (MongoDB, Express.js, React, Node.js), Socket.IO for real-time communication, and Quill as the text editor.
SCREENSHOTS:
<img width="1280" height="560" alt="image" src="https://github.com/user-attachments/assets/5e180c62-ece4-45f9-8033-7cd142dfed18" />
<img width="1280" height="561" alt="image" src="https://github.com/user-attachments/assets/c85a1d84-630e-431d-9b93-a6af0cc5648b" />

<img width="1280" height="560" alt="image" src="https://github.com/user-attachments/assets/df4c85dc-273f-4b46-936d-2347225084e5" />

<img width="1280" height="563" alt="image" src="https://github.com/user-attachments/assets/b266967d-fde0-4f57-ab91-c5230a80e401" />
Features
1. Document Collaboration
Users can create documents and collaborate with others in real-time. Collaborators can simultaneously edit the document, and changes are instantly reflected for all participants.

2. Collaborator Presence
The web app displays a list of online collaborators for each document. Users can see who else is currently active in the document, making collaboration more transparent.

3. Email VerificationTo enhance security and user authentication, RealTimeEdify implements email verification for user accounts. Users receive an email with a verification link upon registration.

To enhance security and user authentication, RealTimeEdify implements email verification for user accounts. Users receive an email with a verification link upon registration.

4. Real-Time Editing
Quill, a powerful and customizable WYSIWYG editor, is integrated into RealTimeEdify to provide a seamless real-time editing experience. Users can see live updates as collaborators edit the document.

Technologies Used
MERN Stack:

MongoDB: NoSQL database for storing user data and document content.
Express.js: Backend framework for building the API.
React: Frontend library for building the user interface.
Node.js: JavaScript runtime for server-side development.
Socket.IO:

Enables real-time bidirectional communication between clients and the server. Used for collaborative editing and presence tracking.
Quill:

Feature-rich WYSIWYG editor used for document editing. Customized for real-time collaboration.
Getting Started
Follow these steps to run RealTimeEdify locally:

Clone the repository:

git clone https://github.com/your-username/RealTimeEdify.git
cd RealTimeEdify
Install dependencies for frontend:

   cd src
   cd client
   npm i
Install dependencies for backend:
   cd src
   npm i
Set up .env variables by creating a .env file in the server directory and adding the following variables:
For server side:
 MONGODB_URI=your_mongo_db_uri
 JWT_SECRET=your_jwt_secret
 PORT=8000
 PASSWORD=your_app_password_for_email
 EMAIL=your_gmail_email
 BACKEND_URL=your_backend_url/api/v1
 FRONTEND_URL=your_frontend_url
 PRODUCTION=false
Replace your_mongodb_connection_string, your_jwt_secret, your_email_username, your_email_password, your_email_host, and your_email_port with your own values.

Note: If you are using Gmail for sending emails, you need to enable "Less secure app access" in your Google account settings.

For client side:
 VITE_APP_BACKEND_URL=your_backend_url/api/v1
 VITE_APP_SOCKET_URL=your_backend_url
Replace your_backend_url with the URL where the backend server is running.

Run the frontend
  cd src
  cd client
  npm run dev
Run the backend
  cd src
  npm run dev
Access the application in your browser at http://localhost:5173.

Create an account and start collaborating on documents!

working of our project:
🎥 [Watch Project Demo](https://github.com/sabnoor17kaur-ai/RealTimeEdify/raw/main/assets/Recording%202025-11-10%20193723.mp4)

