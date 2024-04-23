# About the app 

Simple admin dashboard for displaying sales contracts, filtering them, editing and creating new ones. 

#### Techonologies used

This project uses [react-admin](https://marmelab.com/react-admin/), a framework for building admin interfaces. React-admin allows you to build backend-heavy web applications, from simple CRUD apps to large enterprise-grade applications.

# Development environment

- Node version : v20.5.1
- npm version: 9.8.0
- npx version: 9.8.0

To run the development server, you first need to install dependencies by running:

```
$ npm install --legacy-peer-deps
```

Start the development server:

```
$ npm run dev
```

note: This runs both client and server scripts concurrently.


### JSON server

To run only the mock server, without the client, open a new terminal and run

```
$ npm run server
```

This starts [json-server](https://www.npmjs.com/package/json-server) and serves a static file db.json where our mock data resides. 
Be mindful of the port it runs on. If something else is using the port 8000, change the port in package.json under "scripts" -> "server"
