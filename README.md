# GERRM Developer Boilerplate

Boilerplate to aid in a quick start development of a React application using the following technologies.

- GraphQL
- Express
- React
- Relay (TODO)
- MongoDB

Bundler: Webpack (with React Hot Loader)  
Dependency manager: NPM

## Usage
Recommended **Node v5.X.X**  
Providing you currently have Node installed on your machine go ahead and run the following command
```
npm install babel-cli webpack webpack-dev-server -g
```

Then go to the root of the project and run
```
npm install
```

***Before your run the application be sure to setup a mongoDB instance and seed following the instructions below.***

You should now be ready to launch your app.
Run the following and go to http://localhost:3000
```
npm start  
```

## Mongo Setup
If like me you would like to use Docker to run a MongoDB container I would recommend using KiteMatic https://kitematic.com/
and pulling the container from the recommended page, alternatively you can use the Docker CLI by following instructions found at  https://hub.docker.com/_/mongo/.

Change the **mongoUrl** in **config.js** to the URL of your mongo database.

A seed file has been setup for you to start using some data on initial setup.
```
npm run seed
```

Express is setup to expose the graphQL data at ***/graphql***)
When accessed via the browser this loads GraphiQL for query building/testing

## Production Build

Although this is currently still being tweaked you can bundle your code using
```
npm run build-prod
```
