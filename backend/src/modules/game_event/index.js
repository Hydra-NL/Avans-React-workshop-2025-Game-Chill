const gameEventResolver = require("./resolvers/game_event.resolver");

// Utils
const { loadGraphQLFile } = require("@/helpers/graphql.helper");

const gameEventResolvers = [
  gameEventResolver,
];

const gameEventSchemas = [
  loadGraphQLFile(__dirname, "graphql/game_event.graphql"),
];

module.exports = {
  gameEventResolvers,
  gameEventSchemas,
};
