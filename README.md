# Project Overview

This project consists of a backend API built with Express and PostgreSQL, and a frontend application built with React and TypeScript.

## TODO 1

- Add CRUD operations for the database
- Edit services for user and post
- Edit controllers for user and post
- Protect routes:
  - POST /posts (create post)
  - DELETE /posts/:id (delete post)
  - UPDATE /posts/:id (update post)

## TODO 2

- Create a relation in the database: user > post (OneToMany)
- Add user relation to insert new post
- Check owner of post when deleting or updating

## TODO 3 FRONT

### Authentication

```typescript
const response = await fetch("https://api.example.com/auth/signin", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username, password }),
});

if (!response.ok) {
  throw new Error("Échec de la connexion");
}

const data = await response.json();

// Store the token in localStorage
localStorage.setItem("token", data.token);
```

### Authorization

```typescript
// Retrieve the token
const token = localStorage.getItem("token");

const response = await fetch("https://api.example.com/posts", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

## TODO 4

https://tanstack.com/query/v3/
https://react-hook-form.com/

## TODO 5

- setting page user
- Edit email
- Edit password
- bcrypt

## Backend API

- **Framework**: Express
- **Database**: PostgreSQL

### Routes

- **User**: CRUD operations
- **Posts**: CRUD operations

### Database Tables

#### User

| Column     | Type      | Constraints |
| ---------- | --------- | ----------- |
| id         | Int       | PK          |
| username   | varchar   | UNIQUE      |
| password   | varchar   |             |
| email      | varchar   |             |
| created_at | timestamp |             |

#### Post

| Column     | Type      | Constraints      |
| ---------- | --------- | ---------------- |
| id         | Int       | PK               |
| user_id    | Int       | FK (Many To One) |
| title      | varchar   |                  |
| content    | varchar   |                  |
| created_at | timestamp |                  |
| image_path | varchar   |                  |

### Steps to Initialize Project (Backend)

1. Create folder `api`
2. Run `npm init -y`
3. Run `npx tsc --init`
4. Install dependencies:
   ```sh
   npm install express pg
   npm install -D typescript ts-node-dev @types/node @types/express
   ```
