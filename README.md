 Store Management Microservices Backend

This is a Node.js + Express.js microservices backend built for a React Native mobile application that manages store-related data like authentication, inventory (store items), and user profiles.

Each microservice is containerized using Docker, orchestrated using Docker Compose, and routed through NGINX as a reverse proxy.
🛠 Tech Stack

    Node.js + Express.js – Backend framework

    MongoDB + Mongoose – Database for each service

    Docker & Docker Compose – Containerization and orchestration

    NGINX – API gateway and reverse proxy

    RESTful APIs – Standardized communication

    React Native – Target frontend (mobile app)

📦 Microservices Overview
Service	Port	Description
Auth Service	3001	Handles user login and JWT auth
Store Service	3002	Manages CRUD operations on products/items
User Service	3003	Manages user profiles and settings
✨ Features

    🔐 JWT Authentication with protected routes

    🛍️ Store Item Management: Add, fetch, and delete items

    👤 User Profiles: Fetch and update user info

    🌐 NGINX Gateway: All services accessible through a single port

    📦 Dockerized Services: Simple deployment with one command

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