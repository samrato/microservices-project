📚 Store Management Microservices Backend

This is a Node.js + Express microservices backend for a React Native mobile application that handles stores-related data. It is containerized using Docker, orchestrated with Docker Compose, and uses NGINX as a reverse proxy. Each microservice runs independently and serves a single purpose.
🛠 Tech Stack

    Node.js + Express.js

    MongoDB + Mongoose

    NGINX (reverse proxy)

    Docker & Docker Compose

    React Native (Frontend Target)

    RESTful API

📁 Microservices
Service	Port	Description
Auth Service	3001	Handles authentication and JWT
Book Service	3002	Handles CRUD operations on books
User Service	3003	Handles user profiles and settings
🧾 Features

    🔐 Authentication (JWT-based)

    📚 Add, Fetch, Delete Books

    👤 User profile management

    🌍 NGINX for unified API access

    🔄 Dockerized for easy deployment

🗂 Folder Structure
microservices-project/
│
├── nginx/
│   └── default.conf         # NGINX reverse proxy config
│
├── auth-service/
│   ├── index.js             # Express app
│   ├── package.json
│   └── Dockerfile
│
├── book-service/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
├── user-service/
│   ├── index.js
│   ├── package.json
│   └── Dockerfile
│
└── docker-compose.yml       # Multi-service config
4. Access Services

    API Gateway (NGINX): http://localhost

    Auth: http://localhost/api/auth/test

    store: http://localhost/api/store/test

    Users: http://localhost/api/users/test