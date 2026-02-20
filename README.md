# 📝 Blogs

A full-stack blog application built with Node.js, Express, and EJS templating, following the MVC (Model-View-Controller) architecture.

## About

This is a server-rendered blog application where users can create, view, and manage blog posts. It follows a clean MVC structure, separating concerns between data models, business logic controllers, route definitions, and EJS views.

## Features

- Create and view blog posts
- Server-side rendering with EJS templates
- MVC architecture for clean code organization
- Express routing for clean URL handling
- Static file serving for CSS and assets

## Tech Stack

- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **EJS** — Templating engine for server-side rendering
- **CSS** — Styling
- **JavaScript** — Application logic

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/iankala/blogs.git
   cd blogs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. Open your browser at `http://localhost:3000`

## Project Structure

```
blogs/
├── controllers/    # Business logic
├── model/          # Data models
├── routes/         # Express route definitions
├── views/          # EJS templates
├── public/         # Static assets (CSS, images)
├── practice/       # Practice/scratch files
├── app.js          # App entry point
└── package.json    # Dependencies
```

## MVC Overview

- **Model** — Defines the structure of blog post data
- **View** — EJS templates that render HTML for the browser
- **Controller** — Handles incoming requests, processes data, and sends responses
- **Routes** — Maps URLs to the appropriate controller functions

## Author

**Ian Kala** — [GitHub](https://github.com/iankala)
