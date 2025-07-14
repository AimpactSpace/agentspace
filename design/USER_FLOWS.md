# Agent Space: User Flows and Mockups

This document outlines the user flows for key tasks in Agent Space, accompanied by detailed textual mockups.

## 1. User Flow: Creating a New Agent

This flow describes how a user creates a new worker agent using AGENTA.

1.  **User opens the AGENTA Chat Hub.**
2.  **User types a request to create a new agent:** "Create an agent that can help me write emails."
3.  **AGENTA responds with a confirmation message and asks for a name for the agent:** "I can do that. What would you like to name this agent?"
4.  **User provides a name:** "Email Assistant."
5.  **AGENTA confirms the creation of the new agent and provides a link to the agent's chat:** "Great! I've created the 'Email Assistant' agent for you. You can start chatting with it here: [Link to Email Assistant's chat]."
6.  **User clicks the link to go to the new agent's chat.**

### Mockup: AGENTA Chat Hub - Creating a New Agent

```
+-------------------------------------------------------------------+
| AGENTA Chat Hub                                                   |
+-------------------------------------------------------------------+
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | Welcome to Agent Space! How can I help you today?           |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  [Create a new agent] [Delegate a task] [View my agents]          |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | User: Create an agent that can help me write emails.        |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | AGENTA: I can do that. What would you like to name this     |  |
|  | agent?                                                      |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | User: Email Assistant.                                      |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | AGENTA: Great! I've created the 'Email Assistant' agent for|  |
|  | you. You can start chatting with it here: [Link]            |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | [Text Input] [Send Button]                                  |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
+-------------------------------------------------------------------+
```

## 2. User Flow: Delegating a Task

This flow describes how a user delegates a task to a worker agent through AGENTA.

1.  **User opens the AGENTA Chat Hub.**
2.  **User types a request to delegate a task:** "Ask the Email Assistant to write a follow-up email to a client."
3.  **AGENTA identifies the correct agent and asks for more details:** "I can do that. What is the client's name and what was the topic of the previous conversation?"
4.  **User provides the necessary details.**
5.  **AGENTA delegates the task to the Email Assistant and informs the user:** "Thanks. I've asked the Email Assistant to write that email. I'll let you know when it's ready."
6.  **The Email Assistant completes the task and sends the draft to AGENTA.**
7.  **AGENTA sends the draft to the user for review:** "The Email Assistant has finished the draft. Here it is: [Email Draft]."

### Mockup: AGENTA Chat Hub - Delegating a Task

```
+-------------------------------------------------------------------+
| AGENTA Chat Hub                                                   |
+-------------------------------------------------------------------+
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | User: Ask the Email Assistant to write a follow-up email... |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | AGENTA: I can do that. What is the client's name and what   |  |
|  | was the topic of the previous conversation?                 |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | User: The client's name is Jane Doe, and we talked about...  |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | AGENTA: Thanks. I've asked the Email Assistant to write...  |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | AGENTA: The Email Assistant has finished the draft. Here... |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
+-------------------------------------------------------------------+
```

## 3. User Flow: Viewing Agent Status and Results

This flow describes how a user can view the status of their agents and the results of their tasks.

1.  **User navigates to the Dashboard.**
2.  **User sees a list of their worker agents and their current status** (e.g., "Idle," "In Progress").
3.  **User also sees a Task Feed with a timeline of recent events,** including task completions, failures, and other status updates.
4.  **User can click on a task in the feed to view more details,** such as the full text of a generated email or the code produced by a coding agent.

### Mockup: Dashboard - Viewing Status and Results

```
+-------------------------------------------------------------------+
| Dashboard                                                         |
+-------------------------------------------------------------------+
| +---------------------+ +---------------------------------------+ |
| | AGENTA              | | Task Feed                             | |
| | [Ask AI Button]     | |                                       | |
| +---------------------+ | +-------------------------------------+ |
| | Worker Agents       | | | Email Assistant: Wrote email (Success) | |
| | +-----------------+ | | +-------------------------------------+ |
| | | Email Assistant | | | | Blog Writer: Drafted post (In Progress) | |
| | | (Idle)          | | | +-------------------------------------+ |
| | +-----------------+ | | | Code Generator: Syntax error (Failed) | |
| | | Blog Writer     | | | +-------------------------------------+ |
| | | (In Progress)   | | +---------------------------------------+ |
| | +-----------------+ |                                         |
| | | Code Generator  | |                                         |
| | | (Idle)          | |                                         |
| | +-----------------+ |                                         |
| +---------------------+-----------------------------------------+ |
+-------------------------------------------------------------------+
```
