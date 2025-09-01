/* Cors Options */
const corsOptions = {
  credentials: true,
  maxAge: 2592000,
  origin: process.env.APP_ENVIRONMENT === "local" && [
    "http://localhost:7000",
    "http://localhost:7100",
    "https://studio.apollographql.com",
  ],
};

module.exports = {
  corsOptions,
};
