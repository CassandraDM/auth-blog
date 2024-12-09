# TODO 1

- add CRUD BDD
- edit services for user and post
- edit controller for user and post
- protect route POST /posts (create post)
- protect route DELETE /posts/:id (delete post)
- protect route UPDATE /posts/:id (update post)

# TODO 2

- Create into db relation user > post (OneToMany)
- add user relation to insert new post
- check owner of post when delete, or update

# Back API

- express
- postgres

## Routes

- user (CRUD)
- posts (CRUD)

## Tables

### User

| Column     | Type      | Constraints |
| ---------- | --------- | ----------- |
| id         | Int       | PK          |
| username   | varchar   |             |
| password   | varchar   |             |
| email      | varchar   |             |
| created_at | timestamp |             |

### Post

| Column     | Type      | Constraints      |
| ---------- | --------- | ---------------- |
| id         | Int       | PK               |
| user_id    | Int       | FK (Many To One) |
| title      | varchar   |                  |
| content    | varchar   |                  |
| created_at | timestamp |                  |
| image_path | varchar   |                  |

# Step to init project (Back)

- create folder (api)
- npm init
- typescript init
- install dependencies (express, typescript, ts-node-dev, nedemon, ...)
- create files & folders project (index, folder src, ...)
- create routes (users, posts)
- test with postman
- up containers
- create database & tables
- install dependencies postgres
- connect db

## folder architecture (api)

- packages.json
- tsconfig.json
- docker-compose.yml
- .env
- .gitignore
- src/
  - index.ts
  - uesr/
  - post/
  - config/
    - db.ts

# Step to init project (Front)

- npm create vite@latest app -- --template react-ts
- cd app
- npm install
- npm install react-router-dom @types/react-router-dom
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init

## Folder architecture (app)

     app/
     ├── node_module
     ├── public/
     └── src/
         ├── App.tsx
         ├── index.css
         └── main.tsx
     ├── package.json
     ├── tsconfig.json

# TODO

- components/ (in folders (post, user, ui) add the components needed)
- pages/ (in a folder (one for user & one for post) add the differents pages)
- services/ (for post & user // link api with app WARNING: don't forget to install cors!)
- types/(DTOn& type for post & user )
- App.tsx ( create route => BrowserRouter, nav with Link... then Routes -> Route path element)
