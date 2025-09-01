const userResolver = require("./resolvers/user.resolver");

// Utils
const { loadGraphQLFile } = require("@/helpers/graphql.helper");

const userResolvers = [
  userResolver,
];

const userSchemas = [
  loadGraphQLFile(__dirname, "graphql/user.graphql"),
];

module.exports = {
  userResolvers,
  userSchemas,
};
