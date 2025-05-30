# CougarExpress API

This is the backend API for the CougarExpress application, a shuttle tracking system for university campuses.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Built With](#built-with)
- [License](#license)

## Features

- User management (CRUD operations)
- Authentication middleware
- RESTful API endpoints

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/RajeshPaudel165/Express.git
   ```
2. Navigate to the project directory:
   ```
   cd express-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/cougarexpress
   ```

### Usage

To start the application, run:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

The application will be running on `http://localhost:3000`.

## Folder Structure

```
express-app
├── src
│   ├── app.js               # Entry point of the application
│   ├── controllers          # Contains controller functions
│   ├── routes               # Defines application routes
│   ├── models               # Data models for the application
│   ├── middlewares          # Middleware functions
│   └── config               # Configuration files
├── public                   # Static files (CSS, JS, Images)
├── views                    # View templates
├── .gitignore               # Git ignore file
├── package.json             # NPM configuration file
└── README.md                # Project documentation
```

## API Endpoints

### Users
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Health Check
- `GET /api/health` - API health check

## Deployment

### Deploying to Heroku

1. Create a Heroku account if you don't have one
2. Install the Heroku CLI: `npm install -g heroku`
3. Login to Heroku: `heroku login`
4. Create a new Heroku app: `heroku create cougarexpress-api`
5. Set environment variables:
   ```
   heroku config:set MONGODB_URI=your_mongodb_uri
   heroku config:set ACCESS_TOKEN_SECRET=your_secret_key
   ```
6. Push to Heroku: `git push heroku main`
7. Open the app: `heroku open`

### Deploying to Render

1. Create a Render account (https://render.com)
2. Create a new Web Service
3. Connect to your GitHub repository
4. Set the following settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables in the Render dashboard

## Built With

- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [JSON Web Tokens](https://jwt.io/) - Authentication

## License

This project is licensed under the ISC License.