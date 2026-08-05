# Memento-Mori
A macabre task management and planning website, motivating you by serving as a reminder that missing deadlines has irreversible consequences.

## Installation

1. Clone this repository and open the root directory in your editor of choice.
1. (Optional, see Configuration below) Create a .env to configure custom frontend/backend ports.
1. Open a Terminal in the root directory (`` Ctrl+` `` in VSCode).
1. Verify all dependencies are installed by running `npm run install-deps`
1. Start the backend using `npm run dev-backend`.
1. Wait for the backend to fully start before continuing (this should take a few seconds at most).
1. Open a second Terminal in the root directory (in VSCode, use either the 'Split Terminal' or 'New Terminal' button).
1. Start the frontend in the second Terminal using `npm run dev-frontend`.
1. Visit the site by following the link in the second Terminal (`http://localhost:5173` by default)

## Configuration
You can configure the frontend/backend ports by creating a .env file in the root directory with keys `FRONTEND_PORT` and `BACKEND_PORT`. Make sure the ports don't match, and that they aren't being used by other processes on your machine.

Example .env contents:
```
FRONTEND_PORT=5173
BACKEND_PORT=8080
```
These ports will be used by default if you don't create a .env file.