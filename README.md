# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Development environment

- Node version : v20.5.1
- npm version: 9.8.0
- npx version: 9.8.0

To run development server:

$ npm run dev

### Prettier

To ensure formatting consistency across the code base, use prettier.

$ npm install --save-dev --save-exact prettier


### JSON server

To run mock server, open a new terminal ( don't close the terminal where your react app is running ) and run

$ npm run dev-server

This starts [json-server](https://www.npmjs.com/package/json-server) and serves a static file db.json where our mock data resides. 
Be mindful of the port it runs on. If something else is using the port 8000, change the port in package.json under "scripts" -> "dev-server"
