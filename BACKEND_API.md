# Agent Space: Backend API

This document outlines the backend API for Agent Space. The API is responsible for managing agents, handling chat messages, and integrating with the Groq SDK.

## 1. Authentication

*   **POST /api/auth/login:** Authenticates a user and returns a JSON Web Token (JWT).
*   **POST /api/auth/register:** Creates a new user account.

## 2. Agents

*   **GET /api/agents:** Returns a list of all agents for the authenticated user.
*   **POST /api/agents:** Creates a new agent.
    *   **Request Body:** `{ "name": "My New Agent", "skills": ["skill1", "skill2"] }`
*   **GET /api/agents/:agentId:** Returns a single agent by ID.
*   **PUT /api/agents/:agentId:** Updates an agent's information.
*   **DELETE /api/agents/:agentId:** Deletes an agent.

## 3. Chat

*   **GET /api/chat/:agentId:** Returns the chat history for a specific agent.
*   **POST /api/chat/:agentId:** Sends a message to an agent.
    *   **Request Body:** `{ "message": "Hello, agent!" }`

## 4. Groq Integration

The backend will use the Groq SDK to communicate with the Groq API. The specific API calls will depend on the models and features being used, but the general flow will be as follows:

1.  The backend receives a request from the frontend to perform an AI-powered task (e.g., create an agent, generate text).
2.  The backend formats the request and sends it to the Groq API using the Groq SDK.
3.  The backend receives the response from the Groq API.
4.  The backend processes the response and sends it back to the frontend.

## 5. WebSockets

To provide real-time updates for chat messages and task statuses, the backend will use WebSockets. The frontend will establish a WebSocket connection with the backend, and the backend will push updates to the frontend as they occur.
