# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Development environment

- Node version : v20.5.1
- npm version: 9.8.0
- npx version: 9.8.0

To run development server you first need to install it by running

$ npm install --legacy-peer-deps

Start development server:

$ npm run dev

note: This runs both client and server scripts concurrently.

### Prettier

To ensure formatting consistency across the code base, use prettier.

$ npm install --save-dev --save-exact prettier


### JSON server

To run only the mock server, without the client, open a new terminal and run

$ npm run server

This starts [json-server](https://www.npmjs.com/package/json-server) and serves a static file db.json where our mock data resides. 
Be mindful of the port it runs on. If something else is using the port 8000, change the port in package.json under "scripts" -> "server"
