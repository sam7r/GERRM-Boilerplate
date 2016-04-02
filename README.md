# react-relay-graphql-mongo-starter

Boilerplate to aid in a quick start development of a React application using the following technologies.

- React
- Relay
- GraphQL (RisingStack/Graffiti)
- Node (Express)
- MongoDB (Mongoose & RisingStack/graffiti-mongoose)

- Bundler: Webpack (with React Hot Loader)  

## Usage
Recommended **Node v5.X.X**  
Providing you currently have Node installed on your machine go ahead and run the following command
```
npm install
```

The url's port's and directories can been configured in **/conifg.js**  

Run the following and by default the app will launch at http://localhost:3000

```
npm start  
```

If you make any changes to the schema you will need to recompile your changes separately and restart the server for them to take effect
```
npm run update-schema
```

***If you wish to run the example first seed your database following Mongo Setup instructions below.***

## Mongo Setup
If you wish to use a docker container I would recommend using KiteMatic https://kitematic.com/
and pulling from the latest version from the "recommended" page, alternatively you can use the Docker CLI by following instructions found at  https://hub.docker.com/_/mongo/.

Change the **mongoUrl** in **config.js** to the ACCESS_URL of your MongoDB.

By default the config file points to a local machine instance **mongodb://localhost:27017**

Regardless of your chosen method, to run the example you will first need to seed the database.
A seed utility has been setup for you to view some data on initial setup.
```
npm run seed
```

Express is setup to expose the graphQL data at ***/graphql***, GraphiQL ui is enabled by default in Graffiti.

## Production Build

Although this is currently still being tweaked you can bundle your code using
```
npm run build-prod
```
