# GERRM Developer Boilerplate

At present this boilerplate is to aid in a quick start to the development of a React application and should not be used for production purposes.

#### Application stack:
- Node/Express
- React
- Relay / GraphQL (TODO)
- MongoDB

Task runner: Webpack (with Hot Loader)  
Dependency manager: NPM

Application TDD suite: TBC | (Mocha & Chai & Sinon) (TODO)  
Frontend BDD suite: TBC | (Karma) (TODO)

## Setup
Providing you currently have Node installed on your machine go ahead and run the following command.
```
npm install babel-cli webpack webpack-dev-server -g
```

Then go to the root of the folder and pull/update your dependencies.
```
npm install
```

You should now be ready to launch your app.
Run the following and go to http://localhost:3000
```
npm start  
```

## Mongo Setup
If like me you would like to use Docker to run a MongoDB container I would recommend using KiteMatic https://kitematic.com/
and pulling the container from the recommended page, alternatively you can use the Docker CLI by following instructions found at  https://hub.docker.com/_/mongo/.

Change the **mongoUrl** in **config.js** to the URL of your mongo database.

A seed file has been setup for you start using some data on initial setup.
```
npm run seed
```

Express is setup to expose the chosen collections data at a specific endpoint (currently ***/data/test***)

## Production Build

Although this is currently still being tweaked you can bundle your code using
```
npm run build-prod
```
