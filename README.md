# Chat Application

A real-time chat application with account registration, sign-in, password reset, direct messaging, group creation, and notifications. The client and API server are maintained as separate applications.

## Features

- Register an account, sign in, and request a password reset
- Send real-time text messages in direct and group conversations
- Create groups and handle group join requests
- Receive notifications

## Technology

- **Client:** React 19, TypeScript, Vite, Tailwind CSS
- **Server:** Node.js, Express 5, TypeScript, Socket.IO
- **Database:** PostgreSQL with Prisma

## Requirements

- Node.js and npm
- A running PostgreSQL database

## Configuration

Configure the server environment before starting it:

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection URL used by Prisma |
| `JWT_SECRET` | Secret used to sign authentication tokens |
| `PORT` | Server port; defaults to `3003` |
| `FRONTEND_URL` | Allowed client origin for CORS |

The client uses `VITE_API` as its server URL and defaults to `http://localhost:3003`.

For local development, the Vite client normally runs at `http://localhost:5173`; set `FRONTEND_URL` to that origin. Keep secrets in local environment configuration and do not commit them.

## Run locally

Open two terminals from the project directory.

### 1. Set up and start the server

```powershell
cd server
npm install
```

Set the server environment variables above, then apply the Prisma migrations:

```powershell
npx prisma migrate dev
```

Build and start the server:

```powershell
npm run build
npm start
```

The server defaults to port `3003`.

### 2. Start the client

```powershell
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Project layout

```text
client/   React/Vite web application
server/   Express API, Socket.IO server, and Prisma schema/migrations
```

## Notes

- The repository does not include an `.env.example`; configure the required environment variables locally.
- No automated test script is currently defined in the package manifests.
- The documented messaging features refer to text chat; encryption and media-sharing capabilities are not documented because they could not be confirmed from the server implementation.
