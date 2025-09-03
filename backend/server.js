require("./config/alias_config");

const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const { corsOptions } = require("@/helpers/cors.helper");
const { executableSchema } = require("@/graphql");
const { version, name } = require("./package.json");

const env = process.env.APP_ENVIRONMENT || "local";
const port = process.env.PORT || 8000;

// Creating an express server
// -------------------------------------------------------------
const Server = express();

// Security
// -------------------------------------------------------------
Server.use(helmet({
  contentSecurityPolicy: env === "local" ? false : undefined,
  crossOriginEmbedderPolicy: env === "local" ? false : undefined,
}));

// Cors
// -------------------------------------------------------------
Server.use(cors(corsOptions));

// Parse JSON and URL-encoded via req.body
// -------------------------------------------------------------
Server.use(express.json());
Server.use(express.urlencoded({ extended: true }));

// Hardcoded session middleware
// ! Change `userId` to which ever user you want to use
// -------------------------------------------------------------
Server.use((req, res, next) => {
  req.session = { userId: "" };
  next();
});

// A simple home route
// -------------------------------------------------------------
Server.get("/", (req, res) => res.send({
  name: "Game & Chill",
  message: "We are up and running!",
  version: `v${version}`,
}));

// Health route
//-------------------------------------------------------------
Server.get("/health", (req, res) => res.send({
  status: "ok",
  date: new Date(),
  uptime: process.uptime(),
}));

// Create Apollo server and applying schema's and resolvers
// -------------------------------------------------------------
const startApolloServer = async () => {
  try {
    const schema = executableSchema();
    const server = new ApolloServer({
      schema,
      debug: env === "local",
      introspection: env === "local",
      // apollo: {
      //   key: process.env.APOLLO_API_KEY,
      //   graphRef: process.env.APOLLO_GRAPH_REF,
      // },
    });

    await server.start();

    Server.use(
      "/graphql",
      expressMiddleware(server, {
        context: ({ req, res }) => ({
          req,
          res,
          next: error => {
            console.error("Next Error", error);
            return error;
          },
        }),
      }),
    );

    return true;
  } catch (error) {
    return console.error("[Apollo Error]", error);
  }
};

// Apollo http server
// -------------------------------------------------------------
startApolloServer();

// Server and Database connection
// -------------------------------------------------------------
mongoose.connect(process.env.DATABASE_URI).then(() => {
  Server.listen(port);
  console.info(`🚀 ${env || "local development"} server ready at ${port}\n`);
  console.info("Using:");
  console.info(`- App: ${name}`);
  console.info(`- Started at: ${new Date()}`);
}).catch(error => {
  console.error(error);
});
