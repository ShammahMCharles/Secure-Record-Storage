# Secure Record Storage API

## Project Overview

This project is a secure Notes API built with **Node.js, Express, MongoDB, and Mongoose**.

The main goal of the project is to allow authenticated users to create and manage notes while ensuring that users can only access, update, or delete notes that belong to them.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* bcrypt
* JSON Web Tokens (JWT)
* dotenv
* Morgan

## Authentication & Authorization

The application uses JWT authentication to identify logged-in users.

Passwords are hashed using bcrypt before being stored in MongoDB.

Authorization is handled by associating each Note with the User who created it. When a user creates a note, their authenticated user ID is stored as the note owner.

This allows the API to verify ownership before allowing a user to:

* View their notes
* View an individual note
* Update a note
* Delete a note

Users who attempt to modify a note belonging to another user receive a `403 Forbidden` response.

## Reusing Previous Projects

I used previous repositories I created during my software engineering coursework as references while building this project.

In particular, I reused concepts and patterns from an earlier authentication project for:

* User registration
* User login
* Password hashing with bcrypt
* JWT creation
* Authentication middleware
* Express route structure

I also referenced patterns from previous CRUD/API projects for:

* Express routers
* Mongoose models
* MongoDB CRUD operations
* Error handling
* API endpoint organization

The previous projects were used as learning references and starting points. I adapted the code and structure to meet the requirements of this Secure Record Storage assignment, particularly the new requirement that notes must belong to specific authenticated users.

## API Routes

### Authentication

| Method | Endpoint             | Purpose                  |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Log in and receive a JWT |

### Notes

| Method | Endpoint         | Purpose                            |
| ------ | ---------------- | ---------------------------------- |
| POST   | `/api/notes`     | Create a note                      |
| GET    | `/api/notes`     | Get the authenticated user's notes |
| GET    | `/api/notes/:id` | Get a specific note                |
| PUT    | `/api/notes/:id` | Update an owned note               |
| DELETE | `/api/notes/:id` | Delete an owned note               |

## Security

The application does not trust the client to determine note ownership.

Instead, the authenticated user's ID is taken from the JWT/authentication middleware and assigned to the note on the server.

This prevents a user from simply providing another user's ID when creating a note.

Ownership is also checked before updating or deleting notes.

## Project Structure

```text
SecureRecordStorage/
│
├── config/
│   └── db-connection.js
│
├── middleware/
│   └── auth.js
│
├── models/
│   ├── User.js
│   └── Notes.js
│
├── routes/
│   ├── userRoutes.js
│   └── notesRoutes.js
│
├── public/
│
├── .env
├── server.js
├── package.json
└── README.md
```

## Learning Reflection

This project helped me better understand the difference between **authentication** and **authorization**.

Authentication answers:

> "Who is this user?"

Authorization answers:

> "Is this user allowed to access this resource?"

By connecting users to their notes through MongoDB ObjectIds and checking ownership before protected operations, I was able to apply both concepts to a full-stack API.
