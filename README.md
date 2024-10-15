# Node.js TypeScript Starter Kit

This project is a starter kit for Node.js applications written in TypeScript. It includes several scripts to facilitate development, building, and running the server.

## Prerequisites

- **Node.js v18 minimum**: Make sure you are using Node.js version 18 or higher. You can check the installed version with:
  ```bash
  node -v
  ```

## Installation

To install the project dependencies, run:

```bash
npm install
```

## Available Scripts

Here are the various commands available in the project:

- `npm run start`: Starts the Node.js server. Use this command to run the application in production.
- `npm run start:watch`: Starts the server in watch mode. Automatically restarts the server on file changes.
- `npm run start:dev`: Starts the server in watch mode with continuous TypeScript transpilation. Uses the concurrently package to run both the server and transpilation in parallel.
- `npm run build`: Transpiles the TypeScript code to JavaScript using esbuild. The generated files are placed in the build folder.
- `npm run watch`: Performs the same task as build, but in watch mode. Automatically recompiles the files on changes.
