const gql = require("graphql-tag");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");

// Modules Resolvers | Schemas
const { userSchemas, userResolvers } = require("@/modules/user");
const { gameEventSchemas, gameEventResolvers } = require("@/modules/game_event");

const rootSchema = gql`
  # {Root Schema}
  scalar Date
  scalar Upload

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const resolvers = [
  ...userResolvers,
  ...gameEventResolvers,
];

const typeDefs = [
  ...userSchemas,
  ...gameEventSchemas,
  rootSchema,
];

const executableSchema = () => {
  const mergedTypeDefs = mergeTypeDefs(typeDefs);
  const mergedResolvers = mergeResolvers(resolvers);

  const schema = makeExecutableSchema({ resolvers: mergedResolvers, typeDefs: mergedTypeDefs });
  return schema;
};

module.exports = {
  executableSchema,
};
