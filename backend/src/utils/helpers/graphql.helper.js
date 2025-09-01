const fs = require("fs");
const path = require("path");
const gql = require("graphql-tag");

/**
 * Load GraphQL file from the graphql directory
 * @param {string} baseDirectory - base directory
 * @param {string} filePath - GraphQL file path
 */
function loadGraphQLFile(baseDirectory, filePath) {
  const fullPath = path.join(baseDirectory, filePath);
  const content = fs.readFileSync(fullPath, "utf8");
  return gql`${content}`;
}

module.exports = {
  loadGraphQLFile,
};
