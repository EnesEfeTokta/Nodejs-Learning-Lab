# 03 - Rest API Basic Login

This mini-project builds a simple REST API for user login using Node.js and Express.

## Concepts covered
- Handling POST requests
- User authentication basics
- JSON request and response handling
This is a learning-focused project, not production-ready.

## Available Endpoint
- `POST /api/login` - Accepts JSON body with `username` and `password`, returns a success message if credentials are correct, otherwise returns an error message.

## Example Request
```json
{
  "username": "user1",
  "password": "password123"
}
```