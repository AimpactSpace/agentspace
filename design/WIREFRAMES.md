# Agent Space: Wireframes

This document contains wireframes for the key screens of the Agent Space application. These wireframes are based on the UI kit and are designed to be user-friendly and intuitive.

## 1. Dashboard

The dashboard is the user's home base. It provides a quick overview of all their agents and tasks.

*   **Layout:** A two-column grid.
*   **Left Column:**
    *   A large "AGENTA" card with a prominent "Ask AI" button.
    *   A list of "Worker Agents" with their status and a button to view their chat.
*   **Right Column:**
    *   A "Task Feed" that shows a timeline of recent actions and status updates.
    *   A "Notifications" panel that displays important alerts and messages.

```
+-------------------------------------------------------------------+
| Dashboard                                                         |
+-------------------------------------------------------------------+
| +---------------------+ +---------------------------------------+ |
| | AGENTA              | | Task Feed                             | |
| | [Ask AI Button]     | |                                       | |
| +---------------------+ | +-------------------------------------+ |
| | Worker Agents       | | | Task 1 (Success)                    | |
| | +-----------------+ | | +-------------------------------------+ |
| | | Agent 1 (Idle)  | | | | Task 2 (In Progress)                | |
| | +-----------------+ | | +-------------------------------------+ |
| | | Agent 2 (Busy)  | | | | Task 3 (Failed)                     | |
| | +-----------------+ | | +-------------------------------------+ |
| +---------------------+ +---------------------------------------+ |
+-------------------------------------------------------------------+
```

## 2. AGENTA Chat Hub

The AGENTA chat hub is where users interact with AGENTA. It is designed to be a welcoming and conversational space.

*   **Layout:** A single-column layout with a large chat window.
*   **Chat Window:**
    *   A welcoming message from AGENTA.
    *   A list of suggestion chips to help users get started.
    *   A text input field for users to type their messages.
*   **Toolbar:** A floating toolbar with buttons for formatting text, attaching files, and accessing other features.

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
|  | [User's message]                                            |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | [AGENTA's response]                                         |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
|  +-------------------------------------------------------------+  |
|  | [Text Input] [Send Button]                                  |  |
|  +-------------------------------------------------------------+  |
|                                                                   |
+-------------------------------------------------------------------+
```

## 3. Agent Card Grid/List

The agent card grid/list allows users to browse, edit, and launch into an agent's chat.

*   **Layout:** A grid or list of agent cards.
*   **Agent Card:**
    *   The agent's name and avatar.
    *   The agent's status (e.g., "Idle", "Busy").
    *   A brief description of the agent's skills.
    *   Buttons to "Chat", "Edit", or "Delete" the agent.

```
+-------------------------------------------------------------------+
| My Agents                                                         |
+-------------------------------------------------------------------+
|                                                                   |
|  +-----------------+   +-----------------+   +-----------------+  |
|  | Agent 1 (Idle)  |   | Agent 2 (Busy)  |   | Agent 3 (Idle)  |  |
|  | [Chat] [Edit]   |   | [Chat] [Edit]   |   | [Chat] [Edit]   |  |
|  +-----------------+   +-----------------+   +-----------------+  |
|                                                                   |
|  +-----------------+   +-----------------+   +-----------------+  |
|  | Agent 4 (Idle)  |   | Agent 5 (Idle)  |   | Agent 6 (Busy)  |  |
|  | [Chat] [Edit]   |   | [Chat] [Edit]   |   | [Chat] [Edit]   |  |
|  +-----------------+   +-----------------+   +-----------------+  |
|                                                                   |
+-------------------------------------------------------------------+
```

## 4. Settings Panel

The settings panel allows users to configure their Agent Space account.

*   **Layout:** A simple, single-column layout with clear headings and toggles.
*   **Sections:**
    *   **Account:** Change username, email, and password.
    *   **Model Selection:** A dropdown menu to select the Groq SDK model, with a brief explanation of each model's strengths.
    *   **Notifications:** Toggles to enable or disable different types of notifications.
    *   **Appearance:** Options to switch between light and dark mode.

```
+-------------------------------------------------------------------+
| Settings                                                          |
+-------------------------------------------------------------------+
|                                                                   |
|  ## Account                                                       |
|                                                                   |
|  Username: [Username]                                             |
|  Email: [Email]                                                   |
|                                                                   |
|  ## Model Selection                                               |
|                                                                   |
|  [Dropdown with Groq models]                                      |
|                                                                   |
|  ## Notifications                                                 |
|                                                                   |
|  [Toggle] Email notifications                                     |
|  [Toggle] In-app notifications                                    |
|                                                                   |
|  ## Appearance                                                    |
|                                                                   |
|  [Radio Buttons] Light Mode / Dark Mode                           |
|                                                                   |
+-------------------------------------------------------------------+
```
