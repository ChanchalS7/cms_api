# CMS API Documentation

## Table of Contents

1. [Project Setup](#1-project-setup)
   - [Install Dependencies](#install-dependencies)
   - [Environment Setup](#environment-setup)
2. [Database Setup](#2-database-setup)
   - [Prisma Configuration](#prisma-configuration)
   - [Seed Data](#seed-data)
3. [API Endpoints](#3-api-endpoints)
   - [Post Endpoints](#post-endpoints)
   - [Page Endpoints](#page-endpoints)
   - [Plugin Endpoints](#plugin-endpoints)
4. [Testing Locally with Postman](#4-testing-locally-with-postman)

---

## 1. Project Setup

### Install Dependencies

1. Clone the repository to your local machine:

   ```bash
   git clone <repo-url>
   cd <folder name>
   ```

2. Install Dependencies
   `npm install `

3. Sample .env file

`````DATABASE_URL="postgresql://username:password@localhost:5432/cms_db?schema=public"
PORT=5000```



4. Setup with Prisma
 - Initialize prisma
````npx prisma init ```

`````

- Run Migrations

```
npx prisma migrate dev --name init

```

- Generate Prisma Client

```
npx prisma generate

```

- Seed the database

```
npx prisma db seed

```

5. Running the API Locally

```
npm start

```

### Post API

1. Endpoint: POST `/api/posts`
   Description: Create a new post.
   Request Body:

```
{
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "author": "John Doe"
}

```

2. Get All Posts
   Endpoint: GET `/api/posts`
   Description: Retrieve all posts.
   Response:

```
[
  {
    "id": 1,
    "title": "My First Post",
    "content": "This is the content of my first post.",
    "author": "John Doe",
    "createdAt": "2024-11-24T12:34:56.000Z",
    "updatedAt": "2024-11-24T12:34:56.000Z"
  }
]
```

3. Get Post by ID
   Endpoint: GET `/api/posts/:id`
   Description: Retrieve a specific post by its ID.
   Response:

```
{
  "id": 1,
  "title": "My First Post",
  "content": "This is the content of my first post.",
  "author": "John Doe",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T12:34:56.000Z"
}
```

4. Update a Post
   Endpoint: PUT `/api/posts/:id`
   Description: Update an existing post.
   Request Body:

```
{
  "title": "Updated Post Title",
  "content": "Updated content of the post."
}

```

Response Body:

```
{
  "id": 1,
  "title": "Updated Post Title",
  "content": "Updated content of the post.",
  "author": "John Doe",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T13:00:00.000Z"
}
```

5. Delete a Post
   Endpoint: DELETE `/api/posts/:id`
   Description: Delete a post by its ID.
   Response:

```
{
  "message": "Post deleted successfully"
}
```

### Page API

1. Create a Page
   Endpoint: `POST /api/pages`
   Description: Create a new page.
   Request Body:

```
{
  "title": "About Us",
  "content": "This is the content of the About Us page."
}
```

Response :

```
{
  "id": 1,
  "title": "About Us",
  "content": "This is the content of the About Us page.",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T12:34:56.000Z"
}
```

2. Get All Pages
   Endpoint: GET `/api/pages`
   Description: Retrieve all pages.
   Response:

```
[
  {
    "id": 1,
    "title": "About Us",
    "content": "This is the content of the About Us page.",
    "createdAt": "2024-11-24T12:34:56.000Z",
    "updatedAt": "2024-11-24T12:34:56.000Z"
  }
]
```

3. Get Page by ID
   Endpoint: GET `/api/pages/:id`
   Description: Retrieve a specific page by its ID.
   Response:

```
{
  "id": 1,
  "title": "About Us",
  "content": "This is the content of the About Us page.",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T12:34:56.000Z"
}
```

4. Update a Page
   Endpoint: PUT `/api/pages/:id`
   Description: Update an existing page.
   Request Body:

```
{
  "title": "Updated About Us",
  "content": "This is the updated content of the About Us page."
}

```

Response:

```
{
  "id": 1,
  "title": "Updated About Us",
  "content": "This is the updated content of the About Us page.",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T13:00:00.000Z"
}
```

5. Delete a Page
   Endpoint: DELETE `/api/pages/:id`
   Description: Delete a page by its ID.
   Response:

```
{
 "message": "Page deleted successfully"
}
```

### Plugin API

1. Create a Plugin
   Endpoint: POST `/api/plugins`
   Description: Create a new plugin.
   Request Body:

```
{
  "name": "SEO Plugin",
  "description": "A plugin to handle SEO functionality."
}
```

Response:

```
{
  "id": 1,
  "name": "SEO Plugin",
  "description": "A plugin to handle SEO functionality.",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T12:34:56.000Z"
}
```

2. Get All Plugins
   Endpoint: GET `/api/plugins`
   Description: Retrieve all plugins.
   Response:

```
[
  {
    "id": 1,
    "name": "SEO Plugin",
    "description": "A plugin to handle SEO functionality.",
    "createdAt": "2024-11-24T12:34:56.000Z",
    "updatedAt": "2024-11-24T12:34:56.000Z"
  }
]
```

3. Get Plugin by ID
   Endpoint: GET `/api/plugins/:id`
   Description: Retrieve a specific plugin by its ID.
   Response:

```
{
  "id": 1,
  "name": "SEO Plugin",
  "description": "A plugin to handle SEO functionality.",
  "createdAt": "2024-11-24T12:34:56.000Z",
  "updatedAt": "2024-11-24T12:34:56.000Z"
}

```

4.  Update a Plugin
    Endpoint: PUT `/api/plugins/:id`
    Description: Update an existing plugin.
    Request Body:

```
    {
    "name": "Updated SEO Plugin",
    "description": "Updated description for SEO plugin."
    }
```

    Response:

```
   {
 "id": 1,
 "name": "Updated SEO Plugin",
 "description": "Updated description for SEO plugin.",
 "createdAt": "2024-11-24T12:34:56.000Z",
 "updatedAt": "2024-11-24T13:00:00.000Z"
 }
```

5. Delete a Plugin
   Endpoint: DELETE `/api/plugins/:id`
   Description: Delete a plugin by its ID.
   Response:

```
{
  "message": "Plugin deleted successfully"
}

```

### Checking table and db records locally

[Check prisma studio]
`npx prisma studio`
Local server ` http://localhost:5555`
